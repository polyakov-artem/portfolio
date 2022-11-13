const SELECTOR_MENU = '.header'
const SELECTOR_TOGGLER = '.header__toggler'

const CLASS_MENU_ACTIVE = 'header_active'
const CLASS_TOGGLER_ACTIVE = 'hamburger_active'

class Header {
  constructor($element) {
    this.bindEvents($element);
  }

  bindEvents($menu) {
    $menu.find(SELECTOR_TOGGLER)
      .click(this.hamburgerClickHandler)
  }

  hamburgerClickHandler(){
    $(this).toggleClass(CLASS_TOGGLER_ACTIVE);
    $(this).closest(SELECTOR_MENU).toggleClass(CLASS_MENU_ACTIVE);
  }
}

$(() => {
  $(SELECTOR_MENU).each(function() {
    new Header($(this))
  })
})