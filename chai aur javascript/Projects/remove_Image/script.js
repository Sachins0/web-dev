document.querySelector('#images').addEventListener
('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName=='IMG'){
        const removeIt=e.target.parentNode;
        //  removeIt.remove();
        removeIt.parentNode.removeChild(removeIt);
    }
})