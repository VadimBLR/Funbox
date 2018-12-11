let cardProduct = document.querySelectorAll('.card_product-body');
let cardProductLink = document.querySelectorAll('.section-content-block-link');
let sectionContentBlock = document.querySelector('.card_product-none');



function cardProductClick(e) {
    let currentCardProduct = e.currentTarget;
    let targetWeight = e.currentTarget.querySelectorAll('.card_product-body-block-image-weight');
    currentCardProduct.classList.toggle('card_product-body-active');
    if(document.querySelector('.card_product-body-active')){
        currentCardProduct.addEventListener('mouseleave', cardActiveOut);
        function cardActiveOut(r) {
            if (!currentCardProduct.classList.contains('card_product-body-active')) {
                r.stopPropagation();
                currentCardProduct.classList.remove('card_product-body-active-hover')
            } else {
                currentCardProduct.classList.add('card_product-body-active-hover')
            }
        }
    }
    let currentCardProductChild = currentCardProduct.parentNode;
    let targetDescriptionActive = currentCardProductChild.querySelectorAll('.section-content-block-link-name-active');
    let targetDescription = currentCardProductChild.querySelectorAll('.section-content-block-link-name');
    for(let i = 0; i < targetWeight.length; i++){
        targetWeight[i].classList.toggle('card_product-body-block-image-weight-active')
    }
    for(let i = 0; i < targetDescriptionActive.length; i++){
        targetDescriptionActive[i].classList.toggle('section-content-block-link-name-active-on')
    }
    for(let i = 0; i < targetDescription.length; i++){
        targetDescription[i].classList.toggle('section-content-block-link-name-off')
    }

}
function cardProductLinkClick(e) {
    let currentCardProduct = e.currentTarget;
    let currentCardProductTop = currentCardProduct.parentNode.parentNode.parentNode.childNodes[1];
    let targetWeight = currentCardProductTop.querySelectorAll('.card_product-body-block-image-weight');
    let currentCardProductChild = currentCardProduct.parentNode.parentNode;
    let targetDescriptionActive = currentCardProductChild.querySelectorAll('.section-content-block-link-name-active');
    let targetDescription = currentCardProductChild.querySelectorAll('.section-content-block-link-name');
        currentCardProductTop.classList.toggle('card_product-body-active');
    for(let i = 0; i < targetWeight.length; i++){
        targetWeight[i].classList.toggle('card_product-body-block-image-weight-active')
    }
    for(let i = 0; i < targetDescriptionActive.length; i++){
        console.log(targetDescriptionActive[i]);
        targetDescriptionActive[i].classList.add('section-content-block-link-name-active-on')
    }
    for(let i = 0; i < targetDescription.length; i++){
        targetDescription[i].classList.add('section-content-block-link-name-off')
    }

}
for(let i = 0; i < cardProduct.length; i++) {
    cardProduct[i].addEventListener('click', cardProductClick);
}
for(let i = 0; i < cardProductLink.length; i++){
    cardProductLink[i].addEventListener('click', cardProductLinkClick);
}

if(document.querySelector('.card_product-none')){
    let cardProductNone = document.querySelector('.card_product-none');
    let weightDisable = cardProductNone.querySelector('.card_product-body-block-image-weight');
    let sectionContentBlockChild = sectionContentBlock.querySelector('.card_product-body');
    let linkNameDisable = cardProductNone.querySelector('.section-content-block-link-name-disable');
    let linkName = cardProductNone.querySelector('.section-content-block-link-name');

    sectionContentBlockChild.classList.add('card_product-body-disable');
    weightDisable.classList.add('card_product-weight-disable');
    linkNameDisable.classList.add('section-content-block-link-name-disable-on');
    linkName.classList.add('section-content-block-link-name-off');
}
if(document.querySelectorAll('.card_product-none')){
    let cardProductNone = document.querySelectorAll('.card_product-none');

    for(let i = 0; i < cardProductNone.length; i++) {
        let cardProductNoneBody = cardProductNone[i].querySelectorAll('.card_product-body');
        let linkName = cardProductNone[i].querySelectorAll('.section-content-block-link-name');
        let linkNameDisable = cardProductNone[i].querySelectorAll('.section-content-block-link-name-disable');
        for(let i = 0; i < linkName.length; i++){
            linkName[i].classList.add('section-content-block-link-name-off');
        }
        for(let i = 0; i < linkNameDisable.length; i++){
            linkNameDisable[i].classList.add('section-content-block-link-name-disable-on');
        }
        for(let i = 0; i < cardProductNoneBody.length; i++) {
            let weightsDisable = cardProductNoneBody[i].querySelectorAll('.card_product-body-block-image-weight');
            cardProductNoneBody[i].classList.add('card_product-body-disable');
            for(let i = 0; i < weightsDisable.length; i++){
                weightsDisable[i].classList.add('card_product-weight-disable');
            }
        }
    }
}