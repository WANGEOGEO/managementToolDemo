// Enum style reference : https://stijndewitt.com/2014/01/26/enums-in-javascript/
// and its translation  : https://www.jianshu.com/p/76fc5ffa9279
// javascript documentation standard : https://www.css88.com/doc/jsdoc/index.html

var MenuType = {
    PRM_MAIN_MENU: 0,  // 主菜单
    SND_MEMBERSHIP: 1, // 会员菜单
    SND_FINANCE: 2,    // 财务
    SND_STAFF: 3,      // 员工管理
    SND_INVENTORY: 4,  // 库存
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
 * @param {image} asset   - button image
 */
function button (layoutX, layoutY, asset) {
    this.layoutX = layoutX; this.layoutY = layoutY;
    this.width = width; this.height = height;
    this.asset = asset;
    this.drawImage = drawImage;
    function drawImage(scale) {
        image(this.asset, this.layoutX, this.layoutY, this.asset.width * scale, this.asset.height * scale);
    }

    /**
     * detect is mouse press inside the button area.
     * @param {number} x 
     * @param {number} y 
     */
    this.isClicked = isClicked;
    function isClicked (x, y, scale) {
        return x >= this.layoutX 
            && x <= this.layoutX + this.width*scale 
            && y >= this.layoutY
            && y <= this.layoutY + this.height*scale;
    }
}

/**
 * create button with text
 * @constructor
 * @param {string} text    - text on the button
 * @param {number} layoutX - x coordinate in canvas
 * @param {number} layoutY - y coordinate in canvas
 * @param {image}  asset   - button image
 */
function textButton (s, layoutX, layoutY, asset) {
    this.button = new button (layoutX, layoutY, asset);
    this.s = s;
    this.drawImage = drawImage;
    function drawImage(scale) {
        this.button.drawImage(scale);
        fill (0);
        text (this.s, this.button.layoutX + this.button.asset.width * 0.35, this.button.layoutY + this.button.asset.height * 0.35);
    }
}

//加几个常用图标，一直在界面上
function shortcut (icon, layoutX, layoutY) {
    this.button = new button (layoutX, layoutY, icon);
    this.drawImage = drawImage;
    function drawImage (scale) {
        this.button.drawImage(scale);
    }
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

    this.drawImage = drawImage;
    function drawImage (scale) {
        for (var index = 0; index < contents.length; index++) {
            const e = contents[index];
            e.drawImage();
        }
        for (var index = 0; index < buttons.length; index++) {
            const e = buttons[index];
            e.drawImage(scale);
        }
        for (var index = 0; index < shortcuts.length; index++) {
            const e = shortcuts[index];
            e.drawImage(scale);
        }
    }
}

