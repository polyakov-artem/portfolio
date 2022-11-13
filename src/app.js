// Common  Js
import importAll from '~js/importAll'

// Blocks
import '~js/blocks'

// Pages


// Dev-tools
// import '~dev-tools/blocks-outline/blocks-outline'

// SVG images
importAll(require.context('~assets/svgForSprite/', true, /\.svg$/))