function rightRect(elem){
    return elem.offsetLeft + elem.offsetWidth
}

function getPercentByScrollWidth(){
    const pageWidth = document.documentElement.scrollWidth
    if(pageWidth > 768){
        return 70
    } else {
        return 40
    }
}

function range(el, binding) {
    const inputWrapper = el.querySelector('.chosen-options-wrapper');
    const children = [...inputWrapper.children];

    const overflowedChildren = children
        .filter(child => rightRect(child) > rightRect(el) / 100 * getPercentByScrollWidth())

    const seemChildrenWidth = children
        .filter(child => rightRect(child) < rightRect(el) / 100 * getPercentByScrollWidth())
        .reduce((total, child) => total + child.offsetWidth, 0)
    inputWrapper.style.width = seemChildrenWidth  + 'px';

    const overflowedChildVal = overflowedChildren.map(child => child.querySelector('.option-text').innerText);
    binding.value(overflowedChildVal)
}

export default {
    name: 'range',
    mounted: (el, binding) =>{
        range(el, binding)
    },
    created: (el, binding) => {
        el.addEventListener('click', ()=>{
            range(el, binding)
        })
        window.addEventListener('resize', ()=>{
            range(el, binding)
        })
    },
}