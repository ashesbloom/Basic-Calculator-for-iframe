var keyMappings = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0',
    '.': 'dot',   
    'Enter': 'equals',
    '+': 'plus',    
    '-': 'minus',    
    '*': 'ast',     
    '/': 'divide'    
};

function keypre(event) {
    var key = event.key;
    var elementId = keyMappings[key];

    if (elementId) {
        var keyElement = document.getElementById(elementId);
        if (keyElement) {
            keyElement.classList.toggle('active');
        }
    }
}
document.addEventListener('keydown', keypre);
