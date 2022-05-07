import { Base } from "./base";
import { Posts } from "./posts";
import { applyMixins } from "./utils";

class Typicode extends Base {}
interface Typicode extends Posts {}

applyMixins(Typicode, [Posts]);

export default Typicode;
