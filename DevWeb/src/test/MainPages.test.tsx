import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import Home from '../pages/Home';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Projects from '../pages/Projects';

const renderWithRouter = (component: React.ReactNode) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
};

describe('Main Pages Check', () => {

    const checkProfileCard = () => {
        expect(screen.getAllByText("Dreckiez").length).toBeGreaterThan(0);
        expect(screen.getByText("DevOps Aspirant")).toBeInTheDocument();
        expect(screen.getByText("HCMUS, Vietnam")).toBeInTheDocument();
    };

    // --- TEST 1: HOME PAGE ---
    it('Render Home page', () => {
        renderWithRouter(<Home />);

        checkProfileCard();
        
        // 1. Check the Terminal Title
        expect(screen.getByText(/root@dreckiez:~\/home/i)).toBeInTheDocument();
        
        // 2. Check "whoami" section
        expect(screen.getByText(/whoami/i)).toBeInTheDocument();
        expect(screen.getByText(/Software Engineering Student/i)).toBeInTheDocument();

        // 3. Check "Latest Logs" section
        expect(screen.getByText(/Latest Logs/i)).toBeInTheDocument();
        
        // 4. Check "System Configuration" (Tech Stack)
        expect(screen.getByText(/System Configuration/i)).toBeInTheDocument();
        expect(screen.getByText(/current_stack:/i)).toBeInTheDocument();
    });

    // --- TEST 2: ABOUT PAGE ---
    it('Render About page', () => {
        renderWithRouter(<About />);

        checkProfileCard();

        // 1. Check Terminal Title
        expect(screen.getByText(/root@dreckiez:~\/about\/README.md/i)).toBeInTheDocument();

        // 2. Check Section Headers
        expect(screen.getByText(/Backstory/i)).toBeInTheDocument();
        expect(screen.getByText(/About This Site/i)).toBeInTheDocument();
        expect(screen.getByText(/Character Stats/i)).toBeInTheDocument();

        // 3. Check specific unique content
        expect(screen.getByText(/Ho Chi Minh University of Science/i)).toBeInTheDocument();
        
        // 4. Check the Stats Grid rendered (e.g., "Badminton" or "Games")
        expect(screen.getByText(/Badminton/i)).toBeInTheDocument(); 
    });

    // --- TEST 3: POSTS (BLOG LIST) ---
    it('Render Posts list', () => {
        renderWithRouter(<Posts />);

        checkProfileCard();

        // 1. Check Terminal Title
        expect(screen.getByText("root@dreckiez:~/posts")).toBeInTheDocument();

        // 2. Check the "ls" command simulation
        expect(screen.getByText(/ls -l --sort=date/i)).toBeInTheDocument();

    });

    // --- TEST 4: PROJECTS (PROJECT LIST) ---
    it('renders Projects grid', () => {
        renderWithRouter(<Projects />);

        checkProfileCard();

        // 1. Check Terminal Title
        expect(screen.getByText("root@dreckiez:~/projects")).toBeInTheDocument();

        // 2. Check "ls" command
        expect(screen.getByText(/ls -la --sort=date/i)).toBeInTheDocument();

        // 3. Check that Project Cards are rendering
        const sourceLinks = screen.getAllByText(/View Source/i);
        expect(sourceLinks.length).toBeGreaterThan(0);
    });
});