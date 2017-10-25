describe('Compra Automatizada - Protractor', function() {
  /*
  Passo a passo:
  1- Acessar o site:http://demo.cs-cart.com/.
  2- No campo “Procurar Produtos” pesquise usando o valor “Batman”.
  3- No resultado da pesquisa clique em um dos resultados apresentados.
  4- Na tela do produto pressione o botão “Adicionar ao carrinho”.
  5- Repita os passos 2 a 4, pesquisando pelo item “PS3”.
  6- Valide no carrinho de compras se os produtos foram adicionados com sucesso.
  */
  it('Add 2 items to the cart', function() {
    browser.ignoreSynchronization = true; //for non angular page
    browser.get('http://demo.cs-cart.com/');

    //Search for "Batman"
    element(by.id('search_input')).sendKeys('Batman');
    element(by.css('[class="ty-search-magnifier"]')).click();

    //Check positive return
    var list = element.all(by.css('[class="ty-grid-list__image"]'));
    expect(list).not.toBeLessThan(0);
    
    //Select first item
    list.get(0).click();

    //Add to cart
    element(by.css('[class="ty-btn__primary ty-btn__big ty-btn__add-to-cart cm-form-dialog-closer ty-btn"]')).click();
    
    browser.driver.sleep(1000);    
    //Continue Shopping
    element(by.css('[class="ty-btn ty-btn__secondary cm-notification-close "]')).click();

    //Search for "PS3"
    element(by.id('search_input')).sendKeys('PS3');
    element(by.css('[class="ty-search-magnifier"]')).click();

    //Check positive return
    list = element.all(by.css('[class="ty-grid-list__image"]'));
    expect(list).not.toBeLessThan(0);
    
    //Select first item
    list.get(0).click();

    //Add to cart
    element(by.css('[class="ty-btn__primary ty-btn__big ty-btn__add-to-cart cm-form-dialog-closer ty-btn"]')).click();

    browser.driver.sleep(1000);    
    //Continue Shopping
    element(by.css('[class="ty-btn ty-btn__secondary cm-notification-close "]')).click();

    browser.driver.sleep(1000);
    //Check My cart
    element(by.css('[class="ty-dropdown-box"]')).click();
    
    //Check products in cart, should be 2
    list = element.all(by.css('[class="ty-cart-items__list-item"]'));
    expect(list.count()).toEqual(2);
  });
});