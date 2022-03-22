
export const SideMenuToggle = (state = false , action) => {
    switch (action.type) {
        case 'MENU_TOGGLE':
            return state = !state
        default:
            return state
    }
}

