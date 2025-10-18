---
layout: default
title: "Blockchain Toolkit - Professional VS Code Extension for Web3 Development"
description: "Comprehensive VS Code extension for blockchain development supporting Hardhat, Truffle, Foundry, Solana with advanced debugging, testing, and deployment features."
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

/* Override Cayman theme styles with Hardhat aesthetics */
.page-header {
  background: linear-gradient(120deg, var(--bg-dark) 0%, #2A2834 100%) !important;
  color: var(--text-primary) !important;
  text-align: center;
  padding: 4rem 1rem;
}

.project-name {
  font-size: 3.5rem !important;
  font-weight: 700 !important;
  margin-bottom: 1rem !important;
  color: var(--text-primary) !important;
}

.project-tagline {
  font-size: 1.25rem !important;
  color: var(--text-secondary) !important;
  margin-bottom: 2rem !important;
  line-height: 1.6 !important;
  opacity: 1 !important;
}

.btn {
  background: var(--primary-yellow) !important;
  color: var(--bg-dark) !important;
  padding: 1rem 2rem !important;
  border-radius: var(--border-radius-lg) !important;
  text-decoration: none !important;
  font-weight: 600 !important;
  display: inline-block !important;
  margin: 0.5rem !important;
  transition: all 0.2s ease !important;
  border: none !important;
}

.btn:hover {
  background: #E6D640 !important;
  transform: translateY(-2px) !important;
  box-shadow: var(--shadow-md) !important;
  color: var(--bg-dark) !important;
}

.main-content {
  max-width: 1200px !important;
  margin: 0 auto !important;
  padding: 3rem 1rem !important;
}

/* Custom sections */
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  padding: 1rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-yellow);
  display: block;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-card {
  background: #F8F9FA;
  padding: 2rem;
  border-radius: var(--border-radius-xl);
  border-left: 4px solid var(--primary-yellow);
  transition: all 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  font-size: 2rem;
  color: var(--primary-yellow);
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--bg-dark);
}

.feature-description {
  color: #666;
  line-height: 1.6;
}

.frameworks-section {
  background: #F8F9FA;
  padding: 4rem 2rem;
  margin: 3rem -2rem;
  border-radius: var(--border-radius-xl);
}

.frameworks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.framework-card {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius-lg);
  text-align: center;
  border: 2px solid #E5E7EB;
  transition: all 0.2s ease;
}

.framework-card:hover {
  border-color: var(--primary-yellow);
  transform: translateY(-2px);
}

.framework-logo {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  border-radius: 8px;
}

.framework-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--bg-dark);
}

.framework-features {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.framework-tag {
  background: var(--primary-yellow);
  color: var(--bg-dark);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.cta-section {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--bg-dark);
  color: var(--text-primary);
  margin: 3rem -2rem;
  border-radius: var(--border-radius-xl);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.step-card {
  text-align: center;
  padding: 1.5rem;
}

.step-number {
  background: var(--primary-yellow);
  color: var(--bg-dark);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin: 0 auto 1rem;
}

.community-grid {
  display: flex; 
  gap: 1rem; 
  margin-top: 2rem; 
  flex-wrap: wrap;
}

.community-link {
  padding: 1rem; 
  background: #F8F9FA; 
  border-radius: 8px; 
  text-decoration: none; 
  color: var(--bg-dark); 
  display: flex; 
  align-items: center; 
  gap: 0.5rem;
  flex: 1;
  min-width: 200px;
}

.community-link:hover {
  background: #E9ECEF;
  text-decoration: none;
  color: var(--bg-dark);
}

@media (max-width: 768px) {
  .project-name {
    font-size: 2.5rem !important;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .features-grid,
  .frameworks-grid,
  .steps-grid {
    grid-template-columns: 1fr;
  }
  
  .community-grid {
    flex-direction: column;
  }
}
</style>

<div class="hero-stats">
  <div class="stat-item">
    <span class="stat-number">8+</span>
    <span class="stat-label">Frameworks</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">150+</span>
    <span class="stat-label">Commands</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">50+</span>
    <span class="stat-label">Networks</span>
  </div>
</div>

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://marketplace.visualstudio.com/items?itemName=blockchain-toolkit" class="btn">🚀 Install Extension</a>
  <a href="https://github.com/me-saurabhkohli/blockchain-toolkit" class="btn">📂 View on GitHub</a>
</div>

## 🚀 Why Choose Blockchain Toolkit?

<div class="features-grid">
  <div class="feature-card">
    <div class="feature-icon">🔧</div>
    <h3 class="feature-title">Multi-Framework Support</h3>
    <p class="feature-description">Unified interface supporting Hardhat, Truffle, Foundry, Solana/Anchor with automatic detection and seamless framework switching.</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🐛</div>
    <h3 class="feature-title">Advanced EVM Debugging</h3>
    <p class="feature-description">Step-through debugging with EVM state inspection, memory analysis, stack visualization, and gas usage tracking across all frameworks.</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🌐</div>
    <h3 class="feature-title">Network Management</h3>
    <p class="feature-description">Visual network manager with real-time status monitoring, easy configuration, and support for 50+ networks including mainnet, testnets, and L2s.</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🧪</div>
    <h3 class="feature-title">Testing Suite</h3>
    <p class="feature-description">Comprehensive testing capabilities including coverage analysis, gas optimization, fuzz testing, and security vulnerability scanning.</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">📚</div>
    <h3 class="feature-title">Documentation Generation</h3>
    <p class="feature-description">Automated HTML documentation with deployment to GitHub Pages, Netlify, Vercel, and AWS S3. Includes coverage reports and API references.</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🔄</div>
    <h3 class="feature-title">CI/CD Integration</h3>
    <p class="feature-description">Complete pipeline automation for GitHub Actions, GitLab CI, Jenkins, CircleCI, and Azure DevOps with security scanning and deployment gates.</p>
  </div>
</div>

<div class="frameworks-section" id="frameworks">
  <h2 style="text-align: center; margin-bottom: 1rem; color: var(--bg-dark);">🔗 Multi-chain Framework Support</h2>
  <p style="text-align: center; color: #666; margin-bottom: 2rem;">Build across different blockchain ecosystems with unified tooling and seamless framework switching.</p>
  
  <div class="frameworks-grid">
    <div class="framework-card">
      <img src="assets/hardhat-logo.png" alt="Hardhat" class="framework-logo">
      <h3 class="framework-name">Hardhat</h3>
      <p style="color: #666; font-size: 0.875rem;">Complete Ethereum development environment with built-in testing, debugging, and deployment.</p>
      <div class="framework-features">
        <span class="framework-tag">Local Network</span>
        <span class="framework-tag">TypeScript</span>
        <span class="framework-tag">Plugins</span>
      </div>
    </div>
    
    <div class="framework-card">
      <img src="assets/foundry-logo.png" alt="Foundry" class="framework-logo">
      <h3 class="framework-name">Foundry</h3>
      <p style="color: #666; font-size: 0.875rem;">Fast and portable Ethereum testing framework written in Rust for high-performance development.</p>
      <div class="framework-features">
        <span class="framework-tag">Rust-Powered</span>
        <span class="framework-tag">Solidity Tests</span>
        <span class="framework-tag">Fuzzing</span>
      </div>
    </div>
    
    <div class="framework-card">
      <img src="assets/truffle-logo.png" alt="Truffle" class="framework-logo">
      <h3 class="framework-name">Truffle</h3>
      <p style="color: #666; font-size: 0.875rem;">Classic smart contract development framework with migration system and comprehensive testing suite.</p>
      <div class="framework-features">
        <span class="framework-tag">Migrations</span>
        <span class="framework-tag">Debugger</span>
        <span class="framework-tag">Networks</span>
      </div>
    </div>
    
    <div class="framework-card">
      <img src="assets/solana-logo.png" alt="Solana" class="framework-logo">
      <h3 class="framework-name">Solana/Anchor</h3>
      <p style="color: #666; font-size: 0.875rem;">High-performance blockchain with Rust-based smart contracts and comprehensive development tooling.</p>
      <div class="framework-features">
        <span class="framework-tag">Anchor Framework</span>
        <span class="framework-tag">Rust Programs</span>
        <span class="framework-tag">High TPS</span>
      </div>
    </div>
  </div>
</div>

<div class="cta-section" id="examples">
  <h2 style="margin-bottom: 1rem;">⚡ Get Started in Minutes</h2>
  <p style="margin-bottom: 2rem; color: var(--text-secondary);">Install the extension and start building on your preferred blockchain framework immediately.</p>
  
  <div class="steps-grid">
    <div class="step-card">
      <div class="step-number">1</div>
      <h3 style="margin-bottom: 1rem;">Install Extension</h3>
      <p style="color: var(--text-secondary);">Install from VS Code Marketplace or search for "Blockchain Toolkit" in extensions panel.</p>
      <code style="background: rgba(255,240,77,0.2); padding: 0.5rem; border-radius: 4px; color: var(--primary-yellow);">ext install blockchain-toolkit</code>
    </div>
    
    <div class="step-card">
      <div class="step-number">2</div>
      <h3 style="margin-bottom: 1rem;">Open Project</h3>
      <p style="color: var(--text-secondary);">Open existing blockchain project or create new one. Extension automatically detects framework configuration.</p>
      <code style="background: rgba(255,240,77,0.2); padding: 0.5rem; border-radius: 4px; color: var(--primary-yellow);">code my-blockchain-project</code>
    </div>
    
    <div class="step-card">
      <div class="step-number">3</div>
      <h3 style="margin-bottom: 1rem;">Start Building</h3>
      <p style="color: var(--text-secondary);">Use command palette or sidebar to compile, test, debug, and deploy smart contracts across multiple networks.</p>
      <code style="background: rgba(255,240,77,0.2); padding: 0.5rem; border-radius: 4px; color: var(--primary-yellow);">Ctrl+Shift+P → Blockchain: Compile</code>
    </div>
  </div>
  
  <div style="margin-top: 2rem;">
    <a href="docs/" class="btn">📖 Read Documentation</a>
    <a href="https://github.com/me-saurabhkohli/blockchain-toolkit/tree/main/examples" class="btn">💡 View Examples</a>
  </div>
</div>

## 🤝 Join the Community

Connect with blockchain developers worldwide and stay updated with the latest features and best practices.

<div class="community-grid">
  <a href="https://github.com/me-saurabhkohli/blockchain-toolkit" class="community-link">
    <i class="fab fa-github" style="font-size: 1.5rem;"></i>
    <div>
      <div style="font-weight: 600;">GitHub</div>
      <div style="font-size: 0.875rem; color: #666;">Source code, issues, and contributions</div>
    </div>
  </a>
  
  <a href="https://discord.gg/blockchain-toolkit" class="community-link">
    <i class="fab fa-discord" style="font-size: 1.5rem; color: #5865F2;"></i>
    <div>
      <div style="font-weight: 600;">Discord</div>
      <div style="font-size: 0.875rem; color: #666;">Real-time community chat and support</div>
    </div>
  </a>
  
  <a href="https://twitter.com/blockchain_toolkit" class="community-link">
    <i class="fab fa-twitter" style="font-size: 1.5rem; color: #1DA1F2;"></i>
    <div>
      <div style="font-weight: 600;">Twitter</div>
      <div style="font-size: 0.875rem; color: #666;">Latest updates and announcements</div>
    </div>
  </a>
</div>

---

<p style="text-align: center; color: #666; margin-top: 3rem;">
© 2025 <a href="https://github.com/me-saurabhkohli" style="color: var(--bg-dark); font-weight: 600;">Saurabh Kohli</a>. MIT License.<br>
Built with ❤️ for the blockchain developer community
</p>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">