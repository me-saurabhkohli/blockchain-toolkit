// Feature Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeCodeCopy();
    initializeSmoothScroll();
    initializeDebugControls();
});

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Code copy functionality
function initializeCodeCopy() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeBlock = button.closest('.code-block');
            const code = codeBlock.querySelector('pre code');
            
            if (code) {
                copyToClipboard(code.textContent);
                showCopyFeedback(button);
            }
        });
    });
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
        document.body.removeChild(textArea);
    }
}

function showCopyFeedback(button) {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.style.background = '#10B981';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 2000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Screenshot zoom functionality
function initScreenshotZoom() {
  // Create zoom overlay
  const overlay = document.createElement('div');
  overlay.className = 'screenshot-zoom-overlay';
  overlay.innerHTML = `
    <div class="screenshot-zoom-close">&times;</div>
    <img class="screenshot-zoom-image" alt="Zoomed screenshot">
  `;
  document.body.appendChild(overlay);

  const zoomImage = overlay.querySelector('.screenshot-zoom-image');
  const closeBtn = overlay.querySelector('.screenshot-zoom-close');

  // Add click handlers to screenshots
  document.querySelectorAll('.feature-screenshot').forEach(img => {
    img.addEventListener('click', function() {
      zoomImage.src = this.src;
      zoomImage.alt = this.alt;
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  // Close zoom on overlay click or close button
  overlay.addEventListener('click', closeZoom);
  closeBtn.addEventListener('click', closeZoom);

  function closeZoom() {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.style.display === 'block') {
      closeZoom();
    }
  });
}

// Initialize screenshot zoom when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScreenshotZoom);
} else {
  initScreenshotZoom();
}

// Debug controls functionality
function initializeDebugControls() {
    const debugButtons = document.querySelectorAll('.debug-btn');
    const statusItems = document.querySelectorAll('.status-item');
    
    debugButtons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.classList.contains('start') ? 'start' :
                          button.classList.contains('stop') ? 'stop' :
                          button.classList.contains('step') ? 'step' : 'continue';
            
            handleDebugAction(action, button, debugButtons, statusItems);
        });
    });

    // Trace row interactions
    const traceRows = document.querySelectorAll('.trace-row');
    traceRows.forEach(row => {
        row.addEventListener('click', () => {
            traceRows.forEach(r => r.classList.remove('active'));
            row.classList.add('active');
            updateDebugState(row);
        });
    });

    // Breakpoint toggle functionality
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const isActive = button.classList.contains('active');
            button.textContent = isActive ? '●' : '○';
        });
    });

    // Remove buttons functionality
    const removeButtons = document.querySelectorAll('.remove-btn, .remove-watch');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.breakpoint-item, .watch-item');
            if (item) {
                item.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => item.remove(), 300);
            }
        });
    });

    // Add watch functionality
    const addWatchBtn = document.querySelector('.add-watch-btn');
    const watchInput = document.querySelector('.watch-input');
    
    if (addWatchBtn && watchInput) {
        addWatchBtn.addEventListener('click', () => {
            const expression = watchInput.value.trim();
            if (expression) {
                addWatchExpression(expression);
                watchInput.value = '';
            }
        });

        watchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addWatchBtn.click();
            }
        });
    }
}

function handleDebugAction(action, button, allButtons, statusItems) {
    switch (action) {
        case 'start':
            // Enable other debug buttons
            allButtons.forEach(btn => {
                if (!btn.classList.contains('start')) {
                    btn.disabled = false;
                }
            });
            button.disabled = true;
            
            // Update status
            updateDebugStatus('online', 'Debug Session: Active');
            showDebugNotification('Debug session started', 'success');
            break;
            
        case 'stop':
            // Disable other debug buttons except start
            allButtons.forEach(btn => {
                if (btn.classList.contains('start')) {
                    btn.disabled = false;
                } else {
                    btn.disabled = true;
                }
            });
            
            // Update status
            updateDebugStatus('offline', 'Debug Session: Inactive');
            showDebugNotification('Debug session stopped', 'info');
            break;
            
        case 'step':
            simulateStep();
            showDebugNotification('Stepped forward', 'info');
            break;
            
        case 'continue':
            showDebugNotification('Continuing execution', 'info');
            break;
    }
}

function updateDebugStatus(status, message) {
    const statusIcon = document.querySelector('.status-offline, .status-online');
    if (statusIcon) {
        statusIcon.className = status === 'online' ? 'fas fa-circle status-online' : 'fas fa-circle status-offline';
        const statusText = statusIcon.nextElementSibling;
        if (statusText) {
            statusText.textContent = message;
        }
    }
}

function simulateStep() {
    const activeRow = document.querySelector('.trace-row.active');
    if (activeRow) {
        const nextRow = activeRow.nextElementSibling;
        if (nextRow && nextRow.classList.contains('trace-row')) {
            activeRow.classList.remove('active');
            nextRow.classList.add('active');
            updateDebugState(nextRow);
        }
    }
}

function updateDebugState(row) {
    // Simulate updating stack, memory, etc. based on the selected trace row
    const pc = row.querySelector('.pc')?.textContent;
    const opcode = row.querySelector('.opcode')?.textContent;
    const gas = row.querySelector('.gas')?.textContent;
    
    // You would update actual debug panels here
    console.log(`Debug state updated: PC=${pc}, Opcode=${opcode}, Gas=${gas}`);
}

function addWatchExpression(expression) {
    const watchList = document.querySelector('.watch-list');
    if (!watchList) return;

    const watchItem = document.createElement('div');
    watchItem.className = 'watch-item';
    watchItem.style.animation = 'fadeIn 0.3s ease';
    
    // Simulate getting a value for the expression
    const simulatedValue = getSimulatedValue(expression);
    
    watchItem.innerHTML = `
        <span class="watch-expression">${expression}</span>
        <span class="watch-value">${simulatedValue}</span>
        <button class="remove-watch">✕</button>
    `;
    
    // Add event listener to the new remove button
    const removeBtn = watchItem.querySelector('.remove-watch');
    removeBtn.addEventListener('click', () => {
        watchItem.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => watchItem.remove(), 300);
    });
    
    // Insert before the add-watch div
    const addWatch = document.querySelector('.add-watch');
    watchList.insertBefore(watchItem, addWatch);
}

function getSimulatedValue(expression) {
    // Simulate different types of values based on the expression
    const simulations = {
        'balance': '1000000000000000000',
        'totalSupply': '1000000000000000000000',
        'owner': '0x742d35Cc6634C0532925a3b8D400C4650Ef878f7',
        'msg.sender': '0x742d35Cc6634C0532925a3b8D400C4650Ef878f7',
        'block.timestamp': Math.floor(Date.now() / 1000).toString(),
        'block.number': '12345678'
    };
    
    // Check if expression contains any of our simulated values
    for (const [key, value] of Object.entries(simulations)) {
        if (expression.toLowerCase().includes(key.toLowerCase())) {
            return value;
        }
    }
    
    // Default simulation
    return '0x' + Math.random().toString(16).substr(2, 16);
}

function showDebugNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `debug-notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease'
    });
    
    // Set background color based on type
    const colors = {
        success: '#10B981',
        info: '#3B82F6',
        warning: '#F59E0B',
        error: '#EF4444'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Global function for copy buttons (if called from HTML)
window.copyCode = function(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('pre code');
    
    if (code) {
        copyToClipboard(code.textContent);
        showCopyFeedback(button);
    }
};