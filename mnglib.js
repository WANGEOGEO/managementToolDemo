// Enum style reference : https://stijndewitt.com/2014/01/26/enums-in-javascript/
// and its translation  : https://www.jianshu.com/p/76fc5ffa9279
// javascript documentation standard : https://www.css88.com/doc/jsdoc/index.html

var MenuType = {
    PRM_MAIN_MENU: 0,  // 主菜单
    SND_MEMBERSHIP: 1, // 会员菜单
    SND_STAFF: 2,      // 员工管理
    SND_FINANCE: 3,    // 财务
    SND_INVENTORY: 4,  // 库存

    properties: {
        0: {name: "店务系统", upward: undefined},
        1: {name: "会员管理", upward: MenuType.PRM_MAIN_MENU},
        2: {name: "员工管理", upward: MenuType.PRM_MAIN_MENU},
        3: {name: "账务管理", upward: MenuType.PRM_MAIN_MENU},
        4: {name: "库存管理", upward: MenuType.PRM_MAIN_MENU},
    },
}

var shortcut = {
    NEW_MEMBER  : 0, // 主菜单的注册会员
    FIND_MEMBER : 1, // 主菜单点击放大镜弹出输入手机号的框，输完敲回车进去
    CHECK_OUT   : 2, // 任意菜单的结账快捷按钮
    HOME        : 3, // 任意非主菜单界面快捷回到主菜单的按钮
}

/**
 * Function constructor to create a button object
 * @constructor
 * @param {number} layoutX - x coordinate in canvas
 * @param {number} layoutY - y coordinate in canvas
 * @param {number} width   - width of button
 * @param {number} height  - height of button
 * @param {image} asset   - button image
 */
function button (layoutX, layoutY, width, height, asset) {
    this.layoutX = layoutX; this.layoutY = layoutY;
    this.width = width; this.height = height;
    this.asset = asset;

    function draw() {
        image(this.asset, this.layoutX, this.layoutY, this.width, this.height);
    }

    /**
     * detect is mouse press inside the button area
     * @param {number} x 
     * @param {number} y 
     */
    function isClicked (x, y) {
        return x >= this.layoutX 
            && x <= this.layoutX + this.width 
            && y >= this.layoutY
            && y <= this.layoutY + this.height;
    }

    // 当你想定义按钮事件的时候，重写这个方法
    function onClick()
}

/**
 * create button with text
 * @constructor
 * @param {string} text    - text on the button
 * @param {number} layoutX - x coordinate in canvas
 * @param {number} layoutY - y coordinate in canvas
 * @param {number} width   - width of button
 * @param {number} height  - height of button
 * @param {image}  asset   - button image
 */
function textButton (text, layoutX, layoutY, width, height, asset) {
    this.button = button (layoutX, layoutY, width, height, asset);
    this.text = text;

    function draw() {
        this.button.draw();
        fill(0);
        text(this.text, layoutX + width / 2, layoutY + height / 2);
    }
}

function shortcut (icon, layoutX, layoutY, width, height) {
    this.button = button (layoutX, layoutY, width, height, icon);
}

/**
 * create page object
 * @constructor
 * @param {String} name  - name of the page
 * @param {*} contents 
 * @param {[]} buttons   - list of all buttons
 * @param {[]} shortcuts - list of all shortcuts
 */
function page (name, contents, buttons, shortcuts) {
    this.name = name;
    this.contents = contents;
    this.buttons  = buttons;
    this.shortcuts = shortcuts;

    function draw () {
        buttons.forEach(button => {
            button.draw();
        });
        shortcuts.forEach(short => {
            short.draw();
        })
        contents.forEach(content => {
            content.draw();
        })
    }
}

