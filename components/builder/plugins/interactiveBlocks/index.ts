import { Editor } from "grapesjs";
import pluginCarousel from './carousel';
import pluginFlipCards from './flipCards';
import pluginFlipCards3D from './flipCards3D';
import pluginSocialCards from './socialCards';


export default (editor:Editor) => {
    pluginFlipCards(editor, {}),
    pluginFlipCards3D(editor, {}),
    pluginSocialCards(editor, {}),
    pluginCarousel(editor, {})
}