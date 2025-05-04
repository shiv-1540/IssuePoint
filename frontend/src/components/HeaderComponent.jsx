import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="bg-blue-600 p-4 shadow-md">
                        <div className="container mx-auto">
                            <a href="/users" className="text-white text-xl font-semibold">User Management App</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
