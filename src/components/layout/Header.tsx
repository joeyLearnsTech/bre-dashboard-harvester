
import React from 'react';
import { Button } from "@/components/ui/button";
import { Database, FileText, HelpCircle, Settings } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Database className="h-6 w-6 text-bre-primary" />
          <h1 className="text-xl font-semibold text-gray-800">BRE Backtesting</h1>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="flex items-center space-x-1">
              <FileText className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/history" className="flex items-center space-x-1">
              <Database className="h-4 w-4" />
              <span>History</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm">
            <HelpCircle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
