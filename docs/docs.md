---
layout: default
title: "Documentation - Blockchain Toolkit"
description: "Comprehensive documentation for Blockchain Toolkit VS Code extension with guides, API reference, and examples."
---

<style>
:root {
  --primary-yellow: #FFF04D;
  --bg-dark: #1E1823;
  --bg-secondary: #2A2834;
  --text-primary: #FFFFFF;
  --text-secondary: #9CA3AF;
  --border-light: #E5E7EB;
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --border-radius-lg: 12px;
  --border-radius-xl: 16px;
}

.docs-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 3rem;
}

.docs-sidebar {
  position: sticky;
  top: 2rem;
  height: fit-content;
  background: #F8F9FA;
  border-radius: var(--border-radius-xl);
  padding: 2rem;
}

.docs-nav-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--bg-dark);
}

.docs-nav-section {
  margin-bottom: 2rem;
}

.docs-nav-section h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.docs-nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.docs-nav-links li {
  margin-bottom: 0.5rem;
}

.docs-nav-links a {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: var(--border-radius-lg);
  color: #666;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  text-decoration: none;
}

.docs-nav-links a:hover,
.docs-nav-links a.active {
  background: var(--primary-yellow);
  color: var(--bg-dark);
  text-decoration: none;
}

.docs-content {
  background: white;
  border-radius: var(--border-radius-xl);
  padding: 3rem;
  box-shadow: var(--shadow-md);
  border: 1px solid #E5E7EB;
}

.docs-header {
  border-bottom: 2px solid var(--border-light);
  padding-bottom: 2rem;
  margin-bottom: 3rem;
}

.docs-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--bg-dark);
}

.docs-subtitle {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.7;
}

.command-list {
  display: grid;
  gap: 1rem;
  margin: 2rem 0;
}

.command-item {
  background: #F8F9FA;
  padding: 1rem 1.5rem;
  border-radius: var(--border-radius-lg);
  border-left: 4px solid var(--primary-yellow);
}

.command-name {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-weight: 600;
  color: var(--bg-dark);
  margin-bottom: 0.5rem;
}

.command-description {
  color: #666;
  margin: 0;
  font-size: 0.875rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-item {
  background: #F8F9FA;
  padding: 1.5rem;
  border-radius: var(--border-radius-lg);
  border: 2px solid transparent;
  transition: all 0.2s ease;
}

.feature-item:hover {
  border-color: var(--primary-yellow);
  transform: translateY(-2px);
}

.feature-item h4 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--bg-dark);
}

@media (max-width: 768px) {
  .docs-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
  }

  .docs-sidebar {
    position: static;
    order: 2;
  }

  .docs-content {
    padding: 2rem;
  }

  .docs-title {
    font-size: 2rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="docs-container">
  <!-- Sidebar Navigation -->
  <aside class="docs-sidebar">
    <h3 class="docs-nav-title">📖 Documentation</h3>
    
    <div class="docs-nav-section">
      <h4>Getting Started</h4>
      <ul class="docs-nav-links">
        <li><a href="#installation" class="active">Installation</a></li>
        <li><a href="#quick-start">Quick Start</a></li>
        <li><a href="#configuration">Configuration</a></li>
        <li><a href="#first-project">First Project</a></li>
      </ul>
    </div>

    <div class="docs-nav-section">
      <h4>Core Features</h4>
      <ul class="docs-nav-links">
        <li><a href="#compilation">Compilation</a></li>
        <li><a href="#testing">Testing</a></li>
        <li><a href="#deployment">Deployment</a></li>
        <li><a href="#debugging">Debugging</a></li>
      </ul>
    </div>

    <div class="docs-nav-section">
      <h4>Advanced</h4>
      <ul class="docs-nav-links">
        <li><a href="#evm-debugging">EVM Debugging</a></li>
        <li><a href="#multi-framework">Multi-Framework</a></li>
        <li><a href="#cicd">CI/CD Integration</a></li>
        <li><a href="#templates">Templates</a></li>
      </ul>
    </div>

    <div class="docs-nav-section">
      <h4>Reference</h4>
      <ul class="docs-nav-links">
        <li><a href="#commands">Commands</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#troubleshooting">Troubleshooting</a></li>
      </ul>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="docs-content">
    <div class="docs-header">
      <h1 class="docs-title">📚 Documentation</h1>
      <p class="docs-subtitle">
        Comprehensive guide to using the Blockchain Toolkit VS Code extension for 
        professional blockchain development across multiple frameworks and networks.
      </p>
    </div>

    <!-- Installation Section -->
    <section id="installation">
      <h2>🚀 Installation & Setup</h2>
      
      <h3>Prerequisites</h3>
      <ul>
        <li><strong>VS Code</strong> version 1.74.0 or higher</li>
        <li><strong>Node.js</strong> version 16 or higher</li>
        <li><strong>npm, yarn, or pnpm</strong> package manager</li>
        <li>At least one blockchain framework (Hardhat, Truffle, Foundry, etc.)</li>
      </ul>

      <h3>Install from VS Code Marketplace</h3>
      <div style="background: #1E1823; color: #FFF04D; padding: 1rem; border-radius: 8px; font-family: monospace; margin: 1rem 0;">
        ext install blockchain-toolkit
      </div>

      <p>Or search for "Blockchain Toolkit" in the VS Code Extensions panel.</p>

      <div style="background: #FFF8DC; border-left: 4px solid #FFF04D; padding: 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0;">
        <strong>💡 Pro Tip:</strong> The extension automatically detects blockchain frameworks in your workspace and configures itself accordingly.
      </div>
    </section>

    <!-- Quick Start Section -->
    <section id="quick-start" style="margin-top: 3rem;">
      <h2>⚡ Quick Start Guide</h2>
      
      <h3>For Existing Projects</h3>
      <ol>
        <li>Open your blockchain project in VS Code</li>
        <li>The extension automatically detects your framework configuration</li>
        <li>Use the Command Palette (<code style="background: #F8F9FA; padding: 0.25rem 0.5rem; border-radius: 4px;">Ctrl+Shift+P</code>) to access blockchain commands</li>
        <li>Explore the Blockchain Toolkit sidebar for project navigation</li>
      </ol>

      <h3>For New Projects</h3>
      <div style="background: #1E1823; color: #FFF04D; padding: 1rem; border-radius: 8px; font-family: monospace; margin: 1rem 0;">
        # Create new Hardhat project<br>
        mkdir my-blockchain-project<br>
        cd my-blockchain-project<br>
        npx hardhat init<br><br>
        # Open in VS Code<br>
        code .
      </div>

      <h3>First Commands to Try</h3>
      <div class="command-list">
        <div class="command-item">
          <div class="command-name">Blockchain: Compile Contracts</div>
          <div class="command-description">Compile all smart contracts in your project</div>
        </div>
        <div class="command-item">
          <div class="command-name">Blockchain: Run Tests</div>
          <div class="command-description">Execute your test suite</div>
        </div>
        <div class="command-item">
          <div class="command-name">Blockchain: Select Network</div>
          <div class="command-description">Choose your target network for deployment</div>
        </div>
      </div>
    </section>

    <!-- Core Features Section -->
    <section id="core-features" style="margin-top: 3rem;">
      <h2>🛠️ Core Features</h2>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>🔧 Multi-Framework Support</h4>
          <p>Unified interface for Hardhat, Truffle, Foundry, and Solana with automatic framework detection and seamless switching.</p>
        </div>
        
        <div class="feature-item">
          <h4>🐛 Advanced Debugging</h4>
          <p>Step-through debugging with EVM state inspection, memory analysis, and gas usage tracking across all supported frameworks.</p>
        </div>
        
        <div class="feature-item">
          <h4>🌐 Network Management</h4>
          <p>Visual network manager with real-time status monitoring, easy configuration, and support for 50+ networks.</p>
        </div>
        
        <div class="feature-item">
          <h4>🧪 Testing Suite</h4>
          <p>Comprehensive testing capabilities including coverage analysis, gas optimization, and fuzz testing with detailed reporting.</p>
        </div>
      </div>

      <h3 id="compilation">Smart Contract Compilation</h3>
      <p>Compile your smart contracts across different frameworks:</p>
      <div style="background: #1E1823; color: #FFF04D; padding: 1rem; border-radius: 8px; font-family: monospace; margin: 1rem 0;">
        // Command Palette: "Blockchain: Compile Contracts"<br>
        // Or use keyboard shortcut: Ctrl+Shift+B<br><br>
        // Framework-specific compilation:<br>
        // Hardhat: npx hardhat compile<br>
        // Truffle: truffle compile<br>
        // Foundry: forge build
      </div>

      <h3 id="testing">Testing & Coverage</h3>
      <p>Run comprehensive tests with coverage analysis:</p>
      <div class="command-list">
        <div class="command-item">
          <div class="command-name">Blockchain: Run Tests</div>
          <div class="command-description">Execute all tests in your project</div>
        </div>
        <div class="command-item">
          <div class="command-name">Blockchain: Run Coverage Analysis</div>
          <div class="command-description">Generate detailed test coverage reports</div>
        </div>
        <div class="command-item">
          <div class="command-name">Blockchain: Run Fuzz Tests</div>
          <div class="command-description">Execute property-based fuzz testing</div>
        </div>
      </div>

      <h3 id="deployment">Smart Contract Deployment</h3>
      <p>Deploy contracts to multiple networks with comprehensive management:</p>
      <div style="background: #1E1823; color: #FFF04D; padding: 1rem; border-radius: 8px; font-family: monospace; margin: 1rem 0;">
        # Select network first<br>
        Blockchain: Select Network<br><br>
        # Deploy contracts<br>
        Blockchain: Deploy Contracts<br><br>
        # Verify on block explorer<br>
        Blockchain: Verify Contract
      </div>
    </section>

    <!-- Commands Reference Section -->
    <section id="commands" style="margin-top: 3rem;">
      <h2>💻 Commands Reference</h2>
      
      <p>Complete list of available commands accessible via Command Palette (<code style="background: #F8F9FA; padding: 0.25rem 0.5rem; border-radius: 4px;">Ctrl+Shift+P</code>):</p>

      <h3>Core Development Commands</h3>
      <div class="command-list">
        <div class="command-item">
          <div class="command-name">Blockchain: Compile Contracts</div>
          <div class="command-description">Compile all smart contracts using the detected framework</div>
        </div>
        <div class="command-item">
          <div class="command-name">Blockchain: Run Tests</div>
          <div class="command-description">Execute the complete test suite</div>
        </div>
        <div class="command-item">
          <div class="command-name">Blockchain: Deploy Contracts</div>
          <div class="command-description">Deploy contracts to the selected network</div>
        </div>
        <div class="command-item">
          <div class="command-name">Blockchain: Clean Artifacts</div>
          <div class="command-description">Clean compilation artifacts and cache</div>
        </div>
      </div>

      <h3>Network Management Commands</h3>
      <div class="command-list">
        <div class="command-item">
          <div class="command-name">Blockchain: Select Network</div>
          <div class="command-description">Switch between configured networks</div>
        </div>
        <div class="command-item">
          <div class="command-name">Blockchain: Add Network</div>
          <div class="command-description">Add a new custom network configuration</div>
        </div>
        <div class="command-item">
          <div class="command-name">Blockchain: Check Network Status</div>
          <div class="command-description">Verify connectivity and network information</div>
        </div>
      </div>

      <h3>Debugging Commands</h3>
      <div class="command-list">
        <div class="command-item">
          <div class="command-name">Blockchain: Debug Contract</div>
          <div class="command-description">Start debugging session for current contract</div>
        </div>
        <div class="command-item">
          <div class="command-name">Blockchain: EVM Debug: Start</div>
          <div class="command-description">Launch advanced EVM state debugging</div>
        </div>
        <div class="command-item">
          <div class="command-name">Blockchain: Debug Transaction</div>
          <div class="command-description">Debug a specific transaction by hash</div>
        </div>
      </div>
    </section>

    <!-- Troubleshooting Section -->
    <section id="troubleshooting" style="margin-top: 3rem;">
      <h2>🔧 Troubleshooting</h2>
      
      <h3>Common Issues</h3>
      
      <h4>Extension Not Activating</h4>
      <ul>
        <li>Ensure your workspace contains a supported framework configuration file</li>
        <li>Check the VS Code Output panel for error messages</li>
        <li>Restart VS Code after installation</li>
        <li>Verify the extension is enabled in the Extensions panel</li>
      </ul>

      <h4>Commands Not Working</h4>
      <ul>
        <li>Verify framework dependencies are installed (e.g., <code style="background: #F8F9FA; padding: 0.25rem 0.5rem; border-radius: 4px;">npm list hardhat</code>)</li>
        <li>Check terminal output for error messages</li>
        <li>Enable debug mode in extension settings</li>
        <li>Ensure proper network configuration</li>
      </ul>

      <div style="background: #FFF8DC; border-left: 4px solid #FFF04D; padding: 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0;">
        <strong>❓ Need Help?</strong> Join our <a href="https://discord.gg/blockchain-toolkit" style="color: #1E1823; font-weight: 600;">Discord community</a> or <a href="https://github.com/me-saurabhkohli/blockchain-toolkit/issues" style="color: #1E1823; font-weight: 600;">report issues on GitHub</a> for additional support.
      </div>

      <h3>Debug Mode</h3>
      <p>Enable debug mode for detailed logging:</p>
      <div style="background: #1E1823; color: #FFF04D; padding: 1rem; border-radius: 8px; font-family: monospace; margin: 1rem 0;">
        {<br>
          &nbsp;&nbsp;"blockchain.enableDebugMode": true,<br>
          &nbsp;&nbsp;"blockchain.logLevel": "debug"<br>
        }
      </div>

      <p>View logs in VS Code Output panel → "Blockchain Toolkit"</p>
    </section>

    <!-- Footer Navigation -->
    <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid #E5E7EB; text-align: center;">
      <p style="margin-bottom: 2rem; color: #666;">
        <strong>Ready to start building?</strong> 
        <a href="https://marketplace.visualstudio.com/items?itemName=blockchain-toolkit" style="color: #1E1823; font-weight: 600;">Install the extension</a> 
        and join thousands of developers building the future of Web3.
      </p>
      
      <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
        <a href="../" style="color: #666;">← Back to Home</a>
        <a href="https://github.com/me-saurabhkohli/blockchain-toolkit" style="color: #666;">GitHub Repository</a>
        <a href="https://discord.gg/blockchain-toolkit" style="color: #666;">Join Discord</a>
      </div>
    </div>
  </main>
</div>

<script>
// Documentation-specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for sidebar links
  const sidebarLinks = document.querySelectorAll('.docs-nav-links a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 50;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update active state
        sidebarLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
});
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        .docs-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 120px 1.5rem 4rem;
            display: grid;
            grid-template-columns: 250px 1fr;
            gap: 3rem;
        }

        .docs-sidebar {
            position: sticky;
            top: 120px;
            height: fit-content;
            background: var(--bg-secondary);
            border-radius: var(--border-radius-xl);
            padding: 2rem;
        }

        .docs-nav-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }

        .docs-nav-section {
            margin-bottom: 2rem;
        }

        .docs-nav-section h4 {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.75rem;
        }

        .docs-nav-links {
            list-style: none;
            padding: 0;
        }

        .docs-nav-links li {
            margin-bottom: 0.5rem;
        }

        .docs-nav-links a {
            display: block;
            padding: 0.5rem 0.75rem;
            border-radius: var(--border-radius-md);
            color: var(--text-secondary);
            transition: all 0.2s ease;
            font-size: 0.875rem;
        }

        .docs-nav-links a:hover,
        .docs-nav-links a.active {
            background: var(--primary-yellow);
            color: var(--text-primary);
        }

        .docs-content {
            background: var(--bg-primary);
            border-radius: var(--border-radius-xl);
            padding: 3rem;
            box-shadow: var(--shadow-md);
        }

        .docs-header {
            border-bottom: 2px solid var(--border-light);
            padding-bottom: 2rem;
            margin-bottom: 3rem;
        }

        .docs-title {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .docs-subtitle {
            font-size: 1.125rem;
            color: var(--text-secondary);
            line-height: 1.7;
        }

        .docs-section {
            margin-bottom: 3rem;
        }

        .docs-section h2 {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--text-primary);
            border-bottom: 1px solid var(--border-light);
            padding-bottom: 0.5rem;
        }

        .docs-section h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 2rem 0 1rem;
            color: var(--text-primary);
        }

        .docs-section h4 {
            font-size: 1.25rem;
            font-weight: 600;
            margin: 1.5rem 0 0.75rem;
            color: var(--text-primary);
        }

        .docs-section p {
            margin-bottom: 1.5rem;
            line-height: 1.7;
            color: var(--text-secondary);
        }

        .docs-section ul,
        .docs-section ol {
            margin-bottom: 1.5rem;
            padding-left: 2rem;
            color: var(--text-secondary);
        }

        .docs-section li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
        }

        .code-block {
            background: var(--bg-dark);
            border-radius: var(--border-radius-lg);
            padding: 1.5rem;
            margin: 1.5rem 0;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.875rem;
            color: #f0f0f0;
            overflow-x: auto;
            position: relative;
        }

        .code-block::before {
            content: attr(data-language);
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            background: rgba(255, 240, 77, 0.2);
            color: var(--primary-yellow);
            padding: 0.25rem 0.5rem;
            border-radius: var(--border-radius-sm);
            font-size: 0.75rem;
            font-weight: 500;
        }

        .inline-code {
            background: var(--bg-secondary);
            color: var(--text-primary);
            padding: 0.25rem 0.5rem;
            border-radius: var(--border-radius-sm);
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.875rem;
        }

        .callout {
            border-left: 4px solid var(--primary-yellow);
            background: rgba(255, 240, 77, 0.1);
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-radius: 0 var(--border-radius-lg) var(--border-radius-lg) 0;
        }

        .callout-title {
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }

        .callout p {
            margin-bottom: 0;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }

        .feature-item {
            background: var(--bg-secondary);
            padding: 1.5rem;
            border-radius: var(--border-radius-lg);
            border: 2px solid transparent;
            transition: all 0.2s ease;
        }

        .feature-item:hover {
            border-color: var(--primary-yellow);
            transform: translateY(-2px);
        }

        .feature-item h4 {
            margin-top: 0;
            margin-bottom: 1rem;
        }

        .command-list {
            display: grid;
            gap: 1rem;
            margin: 2rem 0;
        }

        .command-item {
            background: var(--bg-secondary);
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius-lg);
            border-left: 4px solid var(--primary-yellow);
        }

        .command-name {
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .command-description {
            color: var(--text-secondary);
            margin: 0;
            font-size: 0.875rem;
        }

        .toc {
            background: var(--bg-secondary);
            padding: 1.5rem;
            border-radius: var(--border-radius-lg);
            margin-bottom: 2rem;
        }

        .toc h4 {
            margin-top: 0;
            margin-bottom: 1rem;
        }

        .toc ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .toc li {
            margin-bottom: 0.5rem;
        }

        .toc a {
            color: var(--text-secondary);
            transition: color 0.2s ease;
        }

        .toc a:hover {
            color: var(--text-primary);
        }

        @media (max-width: 768px) {
            .docs-container {
                grid-template-columns: 1fr;
                gap: 2rem;
                padding: 100px 1rem 2rem;
            }

            .docs-sidebar {
                position: static;
                order: 2;
            }

            .docs-content {
                padding: 2rem;
            }

            .docs-title {
                font-size: 2rem;
            }

            .feature-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-brand">
                <img src="../assets/logo.png" alt="Blockchain Toolkit" class="logo">
                <span class="brand-text">Blockchain Toolkit</span>
            </div>
            <ul class="nav-menu">
                <li><a href="../#features" class="nav-link">Features</a></li>
                <li><a href="../#frameworks" class="nav-link">Frameworks</a></li>
                <li><a href="index.html" class="nav-link">Docs</a></li>
                <li><a href="../#examples" class="nav-link">Examples</a></li>
                <li><a href="../#community" class="nav-link">Community</a></li>
                <li><a href="https://github.com/me-saurabhkohli/blockchain-toolkit" class="nav-link github-link">
                    <i class="fab fa-github"></i>
                </a></li>
            </ul>
            <div class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <div class="docs-container">
        <!-- Sidebar Navigation -->
        <aside class="docs-sidebar">
            <h3 class="docs-nav-title">Documentation</h3>
            
            <div class="docs-nav-section">
                <h4>Getting Started</h4>
                <ul class="docs-nav-links">
                    <li><a href="#installation" class="active">Installation</a></li>
                    <li><a href="#quick-start">Quick Start</a></li>
                    <li><a href="#configuration">Configuration</a></li>
                    <li><a href="#first-project">First Project</a></li>
                </ul>
            </div>

            <div class="docs-nav-section">
                <h4>Core Features</h4>
                <ul class="docs-nav-links">
                    <li><a href="#compilation">Compilation</a></li>
                    <li><a href="#testing">Testing</a></li>
                    <li><a href="#deployment">Deployment</a></li>
                    <li><a href="#debugging">Debugging</a></li>
                </ul>
            </div>

            <div class="docs-nav-section">
                <h4>Advanced</h4>
                <ul class="docs-nav-links">
                    <li><a href="#evm-debugging">EVM Debugging</a></li>
                    <li><a href="#multi-framework">Multi-Framework</a></li>
                    <li><a href="#cicd">CI/CD Integration</a></li>
                    <li><a href="#templates">Templates</a></li>
                </ul>
            </div>

            <div class="docs-nav-section">
                <h4>Reference</h4>
                <ul class="docs-nav-links">
                    <li><a href="#commands">Commands</a></li>
                    <li><a href="#settings">Settings</a></li>
                    <li><a href="#api">API</a></li>
                    <li><a href="#troubleshooting">Troubleshooting</a></li>
                </ul>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="docs-content">
            <div class="docs-header">
                <h1 class="docs-title">Blockchain Toolkit Documentation</h1>
                <p class="docs-subtitle">
                    Comprehensive guide to using the Blockchain Toolkit VS Code extension for 
                    professional blockchain development across multiple frameworks and networks.
                </p>
            </div>

            <!-- Table of Contents -->
            <div class="toc">
                <h4><i class="fas fa-list"></i> Table of Contents</h4>
                <ul>
                    <li><a href="#installation">Installation & Setup</a></li>
                    <li><a href="#quick-start">Quick Start Guide</a></li>
                    <li><a href="#core-features">Core Features</a></li>
                    <li><a href="#advanced-features">Advanced Features</a></li>
                    <li><a href="#commands-reference">Commands Reference</a></li>
                    <li><a href="#configuration">Configuration</a></li>
                    <li><a href="#troubleshooting">Troubleshooting</a></li>
                </ul>
            </div>

            <!-- Installation Section -->
            <section id="installation" class="docs-section">
                <h2><i class="fas fa-download"></i> Installation & Setup</h2>
                
                <h3>Prerequisites</h3>
                <ul>
                    <li><strong>VS Code</strong> version 1.74.0 or higher</li>
                    <li><strong>Node.js</strong> version 16 or higher</li>
                    <li><strong>npm, yarn, or pnpm</strong> package manager</li>
                    <li>At least one blockchain framework (Hardhat, Truffle, Foundry, etc.)</li>
                </ul>

                <h3>Install from VS Code Marketplace</h3>
                <div class="code-block" data-language="bash">ext install blockchain-toolkit</div>

                <p>Or search for "Blockchain Toolkit" in the VS Code Extensions panel.</p>

                <h3>Manual Installation</h3>
                <div class="code-block" data-language="bash">code --install-extension blockchain-toolkit-1.0.0.vsix</div>

                <div class="callout">
                    <div class="callout-title"><i class="fas fa-lightbulb"></i> Pro Tip</div>
                    <p>The extension automatically detects blockchain frameworks in your workspace and configures itself accordingly.</p>
                </div>
            </section>

            <!-- Quick Start Section -->
            <section id="quick-start" class="docs-section">
                <h2><i class="fas fa-rocket"></i> Quick Start Guide</h2>
                
                <h3>For Existing Projects</h3>
                <ol>
                    <li>Open your blockchain project in VS Code</li>
                    <li>The extension automatically detects your framework configuration</li>
                    <li>Use the Command Palette (<code class="inline-code">Ctrl+Shift+P</code>) to access blockchain commands</li>
                    <li>Explore the Blockchain Toolkit sidebar for project navigation</li>
                </ol>

                <h3>For New Projects</h3>
                <div class="code-block" data-language="bash"># Create new Hardhat project
mkdir my-blockchain-project
cd my-blockchain-project
npx hardhat init

# Open in VS Code
code .</div>

                <h3>First Commands to Try</h3>
                <div class="command-list">
                    <div class="command-item">
                        <div class="command-name">Blockchain: Compile Contracts</div>
                        <div class="command-description">Compile all smart contracts in your project</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: Run Tests</div>
                        <div class="command-description">Execute your test suite</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: Select Network</div>
                        <div class="command-description">Choose your target network for deployment</div>
                    </div>
                </div>
            </section>

            <!-- Core Features Section -->
            <section id="core-features" class="docs-section">
                <h2><i class="fas fa-cogs"></i> Core Features</h2>
                
                <div class="feature-grid">
                    <div class="feature-item">
                        <h4><i class="fas fa-hammer"></i> Multi-Framework Support</h4>
                        <p>Unified interface for Hardhat, Truffle, Foundry, and Solana with automatic framework detection and seamless switching.</p>
                    </div>
                    
                    <div class="feature-item">
                        <h4><i class="fas fa-bug"></i> Advanced Debugging</h4>
                        <p>Step-through debugging with EVM state inspection, memory analysis, and gas usage tracking across all supported frameworks.</p>
                    </div>
                    
                    <div class="feature-item">
                        <h4><i class="fas fa-network-wired"></i> Network Management</h4>
                        <p>Visual network manager with real-time status monitoring, easy configuration, and support for 50+ networks.</p>
                    </div>
                    
                    <div class="feature-item">
                        <h4><i class="fas fa-flask"></i> Testing Suite</h4>
                        <p>Comprehensive testing capabilities including coverage analysis, gas optimization, and fuzz testing with detailed reporting.</p>
                    </div>
                </div>

                <h3 id="compilation">Smart Contract Compilation</h3>
                <p>Compile your smart contracts across different frameworks:</p>
                <div class="code-block" data-language="javascript">// Command Palette: "Blockchain: Compile Contracts"
// Or use keyboard shortcut: Ctrl+Shift+B

// Framework-specific compilation:
// Hardhat: npx hardhat compile
// Truffle: truffle compile  
// Foundry: forge build</div>

                <h3 id="testing">Testing & Coverage</h3>
                <p>Run comprehensive tests with coverage analysis:</p>
                <div class="command-list">
                    <div class="command-item">
                        <div class="command-name">Blockchain: Run Tests</div>
                        <div class="command-description">Execute all tests in your project</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: Run Coverage Analysis</div>
                        <div class="command-description">Generate detailed test coverage reports</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: Run Fuzz Tests</div>
                        <div class="command-description">Execute property-based fuzz testing</div>
                    </div>
                </div>

                <h3 id="deployment">Smart Contract Deployment</h3>
                <p>Deploy contracts to multiple networks with comprehensive management:</p>
                <div class="code-block" data-language="bash"># Select network first
Blockchain: Select Network

# Deploy contracts
Blockchain: Deploy Contracts

# Verify on block explorer
Blockchain: Verify Contract</div>
            </section>

            <!-- Advanced Features Section -->
            <section id="advanced-features" class="docs-section">
                <h2><i class="fas fa-star"></i> Advanced Features</h2>
                
                <h3 id="evm-debugging">EVM State Debugging</h3>
                <p>Advanced EVM debugging capabilities for deep contract analysis:</p>
                
                <div class="feature-grid">
                    <div class="feature-item">
                        <h4>Stack Inspection</h4>
                        <p>View and analyze EVM stack contents with automatic type detection and value formatting.</p>
                    </div>
                    <div class="feature-item">
                        <h4>Memory Analysis</h4>
                        <p>Inspect EVM memory with chunk visualization, search functionality, and hex/ASCII views.</p>
                    </div>
                    <div class="feature-item">
                        <h4>Storage Inspection</h4>
                        <p>Deep dive into contract storage slots with variable name resolution and mapping support.</p>
                    </div>
                    <div class="feature-item">
                        <h4>Gas Analysis</h4>
                        <p>Real-time gas usage tracking with optimization suggestions and cost breakdown.</p>
                    </div>
                </div>

                <div class="code-block" data-language="bash"># Start EVM debugging session
Blockchain: EVM Debug: Start

# Debug specific transaction
Blockchain: EVM Debug: Debug Transaction

# Step through execution
Blockchain: EVM Debug: Step Forward
Blockchain: EVM Debug: Step Backward

# Inspect EVM state
Blockchain: EVM Debug: Show Memory Dump
Blockchain: EVM Debug: Show Stack Trace
Blockchain: EVM Debug: Show Storage State</div>

                <h3 id="multi-framework">Multi-Framework Development</h3>
                <p>Work with multiple blockchain frameworks in a single workspace:</p>
                
                <div class="callout">
                    <div class="callout-title"><i class="fas fa-info-circle"></i> Framework Detection</div>
                    <p>The extension automatically detects multiple frameworks in your workspace and provides unified commands that work across all detected frameworks.</p>
                </div>

                <h3 id="cicd">CI/CD Integration</h3>
                <p>Automated pipeline setup for continuous integration and deployment:</p>
                
                <div class="command-list">
                    <div class="command-item">
                        <div class="command-name">Blockchain: Setup GitHub Actions</div>
                        <div class="command-description">Configure automated testing and deployment workflows</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: Setup GitLab CI</div>
                        <div class="command-description">Create GitLab CI pipeline configuration</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: Run Security Scan</div>
                        <div class="command-description">Execute automated security vulnerability analysis</div>
                    </div>
                </div>
            </section>

            <!-- Commands Reference Section -->
            <section id="commands-reference" class="docs-section">
                <h2><i class="fas fa-terminal"></i> Commands Reference</h2>
                
                <p>Complete list of available commands accessible via Command Palette (<code class="inline-code">Ctrl+Shift+P</code>):</p>

                <h3>Core Development Commands</h3>
                <div class="command-list">
                    <div class="command-item">
                        <div class="command-name">Blockchain: Compile Contracts</div>
                        <div class="command-description">Compile all smart contracts using the detected framework</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: Run Tests</div>
                        <div class="command-description">Execute the complete test suite</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: Deploy Contracts</div>
                        <div class="command-description">Deploy contracts to the selected network</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: Clean Artifacts</div>
                        <div class="command-description">Clean compilation artifacts and cache</div>
                    </div>
                </div>

                <h3>Network Management Commands</h3>
                <div class="command-list">
                    <div class="command-item">
                        <div class="command-name">Blockchain: Select Network</div>
                        <div class="command-description">Switch between configured networks</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: Add Network</div>
                        <div class="command-description">Add a new custom network configuration</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: Check Network Status</div>
                        <div class="command-description">Verify connectivity and network information</div>
                    </div>
                </div>

                <h3>Debugging Commands</h3>
                <div class="command-list">
                    <div class="command-item">
                        <div class="command-name">Blockchain: Debug Contract</div>
                        <div class="command-description">Start debugging session for current contract</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: EVM Debug: Start</div>
                        <div class="command-description">Launch advanced EVM state debugging</div>
                    </div>
                    <div class="command-item">
                        <div class="command-name">Blockchain: Debug Transaction</div>
                        <div class="command-description">Debug a specific transaction by hash</div>
                    </div>
                </div>
            </section>

            <!-- Configuration Section -->
            <section id="configuration" class="docs-section">
                <h2><i class="fas fa-cog"></i> Configuration</h2>
                
                <p>Customize the extension behavior through VS Code settings:</p>

                <h3>Basic Settings</h3>
                <div class="code-block" data-language="json">{
  "blockchain.autoDetectFrameworks": true,
  "blockchain.defaultNetwork": "localhost",
  "blockchain.enableDebugMode": false,
  "blockchain.autoCompile": false,
  "blockchain.enableGasReporting": true
}</div>

                <h3>Advanced Configuration</h3>
                <div class="code-block" data-language="json">{
  "blockchain.solidity.version": "0.8.19",
  "blockchain.solidity.optimizer": true,
  "blockchain.solidity.optimizerRuns": 200,
  "blockchain.evmDebug": {
    "autoRefresh": true,
    "maxStackItems": 50,
    "enableGasAnalysis": true
  },
  "blockchain.security": {
    "enabledDetectors": [
      "reentrancy",
      "access-control",
      "unchecked-return-value"
    ],
    "minSeverity": "medium"
  }
}</div>

                <h3>Network Configuration</h3>
                <p>Networks are configured in your framework's configuration file:</p>
                
                <div class="code-block" data-language="javascript">// hardhat.config.js
module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    },
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 5
    },
    mainnet: {
      url: process.env.MAINNET_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1
    }
  }
};</div>
            </section>

            <!-- Troubleshooting Section -->
            <section id="troubleshooting" class="docs-section">
                <h2><i class="fas fa-wrench"></i> Troubleshooting</h2>
                
                <h3>Common Issues</h3>
                
                <h4>Extension Not Activating</h4>
                <ul>
                    <li>Ensure your workspace contains a supported framework configuration file</li>
                    <li>Check the VS Code Output panel for error messages</li>
                    <li>Restart VS Code after installation</li>
                    <li>Verify the extension is enabled in the Extensions panel</li>
                </ul>

                <h4>Commands Not Working</h4>
                <ul>
                    <li>Verify framework dependencies are installed (e.g., <code class="inline-code">npm list hardhat</code>)</li>
                    <li>Check terminal output for error messages</li>
                    <li>Enable debug mode in extension settings</li>
                    <li>Ensure proper network configuration</li>
                </ul>

                <h4>Compilation Errors</h4>
                <ul>
                    <li>Verify Solidity version compatibility</li>
                    <li>Check import paths and dependencies</li>
                    <li>Clear compilation cache using <code class="inline-code">Blockchain: Clean Artifacts</code></li>
                    <li>Update compiler version in configuration</li>
                </ul>

                <div class="callout">
                    <div class="callout-title"><i class="fas fa-question-circle"></i> Need Help?</div>
                    <p>Join our <a href="https://discord.gg/blockchain-toolkit">Discord community</a> or <a href="https://github.com/me-saurabhkohli/blockchain-toolkit/issues">report issues on GitHub</a> for additional support.</p>
                </div>

                <h3>Debug Mode</h3>
                <p>Enable debug mode for detailed logging:</p>
                <div class="code-block" data-language="json">{
  "blockchain.enableDebugMode": true,
  "blockchain.logLevel": "debug"
}</div>

                <p>View logs in VS Code Output panel → "Blockchain Toolkit"</p>
            </section>

            <!-- Footer Navigation -->
            <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-light); text-align: center;">
                <p style="margin-bottom: 2rem; color: var(--text-secondary);">
                    <strong>Ready to start building?</strong> 
                    <a href="https://marketplace.visualstudio.com/items?itemName=blockchain-toolkit" style="color: var(--text-primary); font-weight: 600;">Install the extension</a> 
                    and join thousands of developers building the future of Web3.
                </p>
                
                <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
                    <a href="../index.html" style="color: var(--text-secondary);">← Back to Home</a>
                    <a href="https://github.com/me-saurabhkohli/blockchain-toolkit" style="color: var(--text-secondary);">GitHub Repository</a>
                    <a href="https://discord.gg/blockchain-toolkit" style="color: var(--text-secondary);">Join Discord</a>
                </div>
            </div>
        </main>
    </div>

    <script src="../js/main.js"></script>
    <script>
        // Documentation-specific JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for sidebar links
            const sidebarLinks = document.querySelectorAll('.docs-nav-links a');
            sidebarLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        const headerOffset = 100;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Update active state
                        sidebarLinks.forEach(l => l.classList.remove('active'));
                        this.classList.add('active');
                    }
                });
            });

            // Update active section based on scroll position
            const sections = document.querySelectorAll('.docs-section');
            const navLinks = document.querySelectorAll('.docs-nav-links a');
            
            window.addEventListener('scroll', function() {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top;
                    if (sectionTop <= 150) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + current) {
                        link.classList.add('active');
                    }
                });
            });
        });
    </script>
</body>
</html>