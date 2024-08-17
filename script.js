document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('mainContent');
    
    sidebar.classList.toggle('hidden');
    
    if (sidebar.classList.contains('hidden')) {
        mainContent.style.marginLeft = '0px';
    } else {
        mainContent.style.marginLeft = '0px';
    }
});