function showTab(tabId, button) {
    
    //hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    //show active tab
    document.getElementById(tabId).classList.add('active');

    //remove active tab
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));

    //activate tab
    button.classList.add('active');
}