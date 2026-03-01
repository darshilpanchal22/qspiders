// Safe query helpers
function $(selector, scope = document) {
    return scope.querySelector(selector);
}
function $all(selector, scope = document) {
    return Array.from(scope.querySelectorAll(selector));
}

// Duty status toggle
(function initDutyToggle() {
    const statusBadge = $('#statusBadge');
    if (!statusBadge) return;

    function setDuty(isOn) {
        statusBadge.textContent = isOn ? 'On Duty' : 'Off Duty';
        statusBadge.classList.toggle('active', isOn);
        statusBadge.style.background = isOn
            ? 'rgba(76, 175, 80, 0.8)'
            : 'rgba(244, 67, 54, 0.8)';
    }

    statusBadge.addEventListener('click', () => {
        const isOn = statusBadge.textContent.trim() !== 'On Duty';
        setDuty(isOn);
    });
})();

// Screen navigation
function openTaskDetail() {
    const list = $('#taskListScreen');
    const detail = $('#taskDetailScreen');
    if (!list || !detail) return;
    list.classList.remove('active');
    detail.classList.add('active');
}

function backToTaskList() {
    const list = $('#taskListScreen');
    const detail = $('#taskDetailScreen');
    if (!list || !detail) return;
    detail.classList.remove('active');
    list.classList.add('active');
}

// Attach navigation to task cards
(function initTaskCards() {
    $all('.task-card').forEach(card => {
        card.addEventListener('click', openTaskDetail);
    });
})();

// FAB (Add new task)
function addNewTask() {
    alert('Add new task feature - would open task creation form');
}
(function initFab() {
    const fab = $('.fab');
    if (fab) fab.addEventListener('click', addNewTask);
})();

// Filter/Sort actions (stubbed)
function showFilterOptions() {
    alert('Filter options:\n- By Status\n- By Priority\n- By Date');
}
function showSortOptions() {
    alert('Sort options:\n- By Priority\n- By Time\n- By Status');
}

// Attachments preview
function viewAttachment(type) {
    const map = {
        image: 'Viewing image attachment',
        doc: 'Viewing document attachment',
        voice: 'Playing voice note attachment',
    };
    alert(map[type] || 'Opening attachment');
}
(function initAttachmentClicks() {
    $all('.attachment-item').forEach(item => {
        item.addEventListener('click', () => {
            item.style.background = '#667eea';
            item.style.color = 'white';
        });
    });
})();

// Task actions
function markComplete() {
    alert('Task marked as complete!');
}
function startTask() {
    alert('Task started! Timer initiated.');
}

// Optional: in-memory sort/filter demo
const taskState = {
    tasks: [
        { id: 1, title: 'AC Repair - Office Building', priority: 'high', status: 'pending', start: '09:00', end: '11:00' },
        { id: 2, title: 'Plumbing Installation', priority: 'medium', status: 'completed', start: '—', end: '10:30' },
        { id: 3, title: 'Electrical Wiring Check', priority: 'high', status: 'pending', start: '14:00', end: '16:00' },
        { id: 4, title: 'Appliance Maintenance', priority: 'low', status: 'completed', start: '—', end: '12:15' },
        { id: 5, title: 'Leak Detection & Repair', priority: 'medium', status: 'pending', start: '17:00', end: '18:30' },
    ],
};

function sortTasksByPriority(desc = true) {
    const order = { high: 3, medium: 2, low: 1 };
    taskState.tasks.sort((a, b) => (desc ? order[b.priority] - order[a.priority] : order[a.priority] - order[b.priority]));
    alert('Tasks sorted by priority (in-memory demo).');
}

function filterTasksByStatus(status) {
    const filtered = taskState.tasks.filter(t => t.status === status);
    alert(`Filtered ${filtered.length} tasks with status: ${status} (in-memory demo).`);
}

// Expose globally for inline handlers
window.openTaskDetail = openTaskDetail;
window.backToTaskList = backToTaskList;
window.addNewTask = addNewTask;
window.showFilterOptions = showFilterOptions;
window.showSortOptions = showSortOptions;
window.viewAttachment = viewAttachment;
window.markComplete = markComplete;
window.startTask = startTask;
window.sortTasksByPriority = sortTasksByPriority;
window.filterTasksByStatus = filterTasksByStatus;
