class ProgressTracker {
    constructor() {
        this.maxDays = 30;
        this.loadProgress();
        this.setupEventListeners();
        this.updateUI();
    }

    loadProgress() {
        this.completedDays = parseInt(localStorage.getItem('completedDays')) || 0;
        this.lastCompletionDate = localStorage.getItem('lastCompletionDate') || null;
    }

    saveProgress() {
        localStorage.setItem('completedDays', this.completedDays);
        localStorage.setItem('lastCompletionDate', this.lastCompletionDate);
    }

    canCompleteToday() {
        if (!this.lastCompletionDate) return true;
        const today = new Date().toDateString();
        return today !== this.lastCompletionDate;
    }

    completeDay() {
        if (!this.canCompleteToday()) {
            return false;
        }
        if (this.completedDays < this.maxDays) {
            this.completedDays++;
            this.lastCompletionDate = new Date().toDateString();
            this.saveProgress();
            this.updateUI();
            return true;
        }
        return false;
    }

    resetProgress() {
        this.completedDays = 0;
        this.lastCompletionDate = null;
        this.saveProgress();
        this.updateUI();
    }

    updateUI() {
        const progressBar = document.getElementById('progressBar');
        const daysCompleted = document.getElementById('daysCompleted');
        const percentage = (this.completedDays / this.maxDays) * 100;

        progressBar.style.width = `${percentage}%`;
        progressBar.setAttribute('aria-valuenow', percentage);
        daysCompleted.textContent = this.completedDays;
    }

    setupEventListeners() {
        const resetButton = document.getElementById('resetProgress');
        const completeButton = document.getElementById('completeActivity');

        resetButton.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset your progress?')) {
                this.resetProgress();
            }
        });

        completeButton.addEventListener('click', () => {
            if (this.completeDay()) {
                completeButton.setAttribute('hidden', true);
                document.getElementById('askButton').setAttribute('disabled', true);
                document.getElementById('message').textContent = 'Great job! Come back tomorrow for a new activity!';
            } else {
                document.getElementById('message').textContent = "You've already completed today's activity!";
            }
        });
    }
} 