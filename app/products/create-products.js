jQuery(($) => {

    // Показать html форму при нажатии кнопки «создать товар»
    $(document).on("click", ".create-product-button", () => {

        // Загрузка списка категорий
        $.getJSON("http://rest-api/api/category/read.php", (data) => {
            // Перебор возвращаемого списка данных и создание списка выбора
            let categories_options_html=`<select name="category_id" class="form-control">`;

            $.each(data.records, (key, val) => {
                categories_options_html+=`<option value="` + val.id + `">` + val.name + `</option>`;
            });

            categories_options_html += `</select>`;

            let create_product_html=`

    <!-- Кнопка для показа всех товаров -->
    <div id="read-products" class="btn btn-primary pull-right m-b-15px read-products-button">
        <span class="glyphicon glyphicon-list"></span> Все товары
    </div>`
        });
    });

    // Здесь будет обработчик «Создать форму товара»


});