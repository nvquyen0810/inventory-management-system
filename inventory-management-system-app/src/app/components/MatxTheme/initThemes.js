import { createTheme } from '@material-ui/core/styles'
import { forEach, merge } from 'lodash'
import { themeColors } from './themeColors'
import themeOptions from './themeOptions'

function createMatxThemes() {
    let themes = {}

    forEach(themeColors, (value, key) => {
        themes[key] = createTheme(merge({}, themeOptions, value))
    })
    return themes
}
export const themes = createMatxThemes()
