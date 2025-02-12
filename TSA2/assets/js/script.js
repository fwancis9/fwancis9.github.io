const buttons = document.querySelectorAll('button:not(.shape-btn)');
const shapeButtons = document.querySelectorAll('.shape-btn');
const displayBox = document.getElementById('display-box');
const displayCircle = document.getElementById('display-circle');
let isAnimating = false;
let currentDisplay = displayBox;

const row2 = document.querySelector('table tr:nth-child(2)');
const row3 = document.querySelector('table tr:last-child');

shapeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (isAnimating) return;
        
        if ((btn.classList.contains('square') && currentDisplay === displayBox) ||
            (!btn.classList.contains('square') && currentDisplay === displayCircle)) {
            return;
        }
        
        shapeButtons.forEach(b => b.style.borderColor = '#808080');
        btn.style.borderColor = '#ffffff';
        
        if (btn.classList.contains('square')) {
            displayCircle.style.display = 'none';
            displayBox.style.display = 'block';
            displayBox.style.borderRadius = '50%';
            displayBox.className = '';
            displayBox.style.backgroundColor = 'transparent';
            currentDisplay = displayBox;
            
            setTimeout(() => {
                displayBox.style.transition = 'border-radius 0.3s ease-in-out';
                displayBox.style.borderRadius = '0';
            }, 50);
            
            setTimeout(() => {
                displayBox.style.transition = '';
            }, 350);
        } else {
            displayBox.style.display = 'none';
            displayCircle.style.display = 'block';
            displayCircle.style.borderRadius = '0';
            displayCircle.className = '';
            displayCircle.style.backgroundColor = 'transparent';
            currentDisplay = displayCircle;
            
            setTimeout(() => {
                displayCircle.style.transition = 'border-radius 0.3s ease-in-out';
                displayCircle.style.borderRadius = '50%';
            }, 50);
            
            setTimeout(() => {
                displayCircle.style.transition = '';
            }, 350);
        }
        
        [row2, row3].forEach(row => {
            row.className = '';
            row.style.transform = 'none';
        });
    });
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (isAnimating) return;
        
        const buttonColor = window.getComputedStyle(button).backgroundColor;
        const currentColor = window.getComputedStyle(currentDisplay).backgroundColor;
        
        if (currentDisplay === displayBox && buttonColor === currentColor) {
            return;
        }
        
        isAnimating = true;
        
        if (currentDisplay === displayBox) {
            currentDisplay.classList.remove('animate-drop');
            currentDisplay.classList.add('animate-up');
            
            setTimeout(() => {
                currentDisplay.classList.remove('animate-up');
                currentDisplay.style.backgroundColor = buttonColor;
                void currentDisplay.offsetWidth;
                currentDisplay.classList.add('animate-drop');
                
                setTimeout(() => {
                    buttons.forEach(btn => {
                        btn.classList.remove('button-impact');
                        void btn.offsetWidth;
                        btn.classList.add('button-impact');
                    });
                }, 250);
                
                setTimeout(() => {
                    isAnimating = false;
                }, 800);
            }, 300);
        } else {
            currentDisplay.style.backgroundColor = buttonColor;
            currentDisplay.classList.remove('animate-roll', 'animate-roll-fall', 'roll-end-position');
            void currentDisplay.offsetWidth;
            
            currentDisplay.classList.add('animate-roll');
            currentDisplay.classList.add('roll-end-position');
            
            setTimeout(() => {
                [row2, row3].forEach(row => {
                    row.classList.remove('row-rotate');
                    void row.offsetWidth;
                    row.classList.add('row-rotate');
                });
                
                currentDisplay.classList.remove('roll-end-position');
                currentDisplay.classList.add('animate-roll-fall');
            }, 500);
            
            setTimeout(() => {
                isAnimating = false;
            }, 1300);
        }
    });
});

shapeButtons[0].style.borderColor = '#ffffff';