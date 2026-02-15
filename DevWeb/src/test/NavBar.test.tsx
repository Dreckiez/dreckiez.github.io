import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from '../components/Navbar';

const renderNavbar = (initialRoute = '/') => {
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <Navbar />
        </MemoryRouter>
    );
};

describe('Navbar Component', () => {

    // TEST 1: Standard Rendering
    it('Render All Navigation Links', () => {
        renderNavbar(); // Default route '/'

        // Links exist twice 
        // (once for desktop, once for mobile menu)
        expect(screen.getAllByText(/Home/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Posts/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Projects/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/About/i).length).toBeGreaterThan(0);
    });

    it('Highlights Active Link', () => {
        // Simulate being on the "/about" page
        renderNavbar('/about');

        // Find the "About" link inside the Desktop Nav
        const aboutLinks = screen.getAllByText(/About/i);
        
        // Check the first one (Desktop) or filter to find the one with the class
        const activeLink = aboutLinks.find(link => link.parentElement?.className.includes('text-blue-400'));
        
        expect(activeLink).toBeInTheDocument();
    });

    it('Toggles Mobile Menu', () => {
        const { container } = renderNavbar();

        // 1. Find the toggle button (using the FontAwesome class)
        const toggleBtn = container.querySelector('.fa-bars');
        expect(toggleBtn).toBeInTheDocument();

        // 2. Click it
        if (toggleBtn) {
            fireEvent.click(toggleBtn);
        }

        // 3. Check if icon changed to 'X' (fa-xmark)
        expect(container.querySelector('.fa-xmark')).toBeInTheDocument();

        // 4. Click it again to close
        const closeBtn = container.querySelector('.fa-xmark');
        if (closeBtn) {
            fireEvent.click(closeBtn);
        }

        // 5. Should go back to bars
        expect(container.querySelector('.fa-bars')).toBeInTheDocument();
    });

    // TEST 4: Closing Menu on Link Click
    it('Closes Mobile Menu', () => {
        const { container } = renderNavbar();

        // Open menu
        const toggleBtn = container.querySelector('.fa-bars');
        if (toggleBtn) fireEvent.click(toggleBtn);

        // Verify menu is open (xmark is present)
        expect(container.querySelector('.fa-xmark')).toBeInTheDocument();

        // Click a link (e.g., Home)
        const homeLinks = screen.getAllByText(/Home/i);
        // Click the last one (usually the mobile one in the DOM order)
        fireEvent.click(homeLinks[homeLinks.length - 1]);

        // Verify menu closed (xmark is gone, bars are back)
        expect(container.querySelector('.fa-bars')).toBeInTheDocument();
    });

    // TEST 5: Sub-path Highlighting
    it('Highlights "Posts" When In Blog Post', () => {
        // Simulate being inside a blog post
        renderNavbar('/posts/freshman-year');

        // Find the "Posts" link
        const postsLinks = screen.getAllByText(/Posts/i);
        
        const activeLink = postsLinks.find(link => link.parentElement?.className.includes('text-blue-400'));
        
        expect(activeLink).toBeInTheDocument();
    });
});