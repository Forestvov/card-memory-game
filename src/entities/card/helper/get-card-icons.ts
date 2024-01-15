import Bird from '../assets/bird.svg'
import Branch from '../assets/branch.svg'
import Bushes from '../assets/bushes.svg'
import Cactus from '../assets/cactus.svg'
import Cactus2 from '../assets/cactus-2.svg'
import Deer from '../assets/deer.svg'
import Flamingo from '../assets/flamingo.svg'
import Fox from '../assets/fox.svg'
import Leaf from '../assets/leaf.svg'
import Leaves from '../assets/leaves.svg'
import Leaves2 from '../assets/leaves-2.svg'
import Leaves3 from '../assets/leaves-3.svg'
import Leaves4 from '../assets/leaves-4.svg'
import Leaves5 from '../assets/leaves-5.svg'
import Pineapple from '../assets/pineapple.svg'
import PottedCactus from '../assets/potted-cactus.svg'
import ShapeEmbellishment from '../assets/shape-embellishment.svg'
import SnowMountain from '../assets/snow-mountain.svg'
import Tree from '../assets/tree.svg'
import Tree2 from '../assets/tree-2.svg'

export const getCardIcons = (slice: number = 5) =>
  [
    Bird,
    Bird,
    Branch,
    Branch,
    Bushes,
    Bushes,
    Cactus,
    Cactus,
    Cactus2,
    Cactus2,
    Deer,
    Deer,
    Flamingo,
    Flamingo,
    Fox,
    Fox,
    Leaf,
    Leaf,
    Leaves,
    Leaves,
    Leaves2,
    Leaves2,
    Leaves3,
    Leaves3,
    Leaves4,
    Leaves4,
    Leaves5,
    Leaves5,
    Pineapple,
    Pineapple,
    PottedCactus,
    PottedCactus,
    ShapeEmbellishment,
    ShapeEmbellishment,
    SnowMountain,
    SnowMountain,
    Tree,
    Tree,
    Tree2,
    Tree2,
  ].slice(0, slice)
