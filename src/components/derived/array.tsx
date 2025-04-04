import { Ocomponent } from "../common";

import { TObjectLike } from "../templates/object-like.template";

export const OArray: Ocomponent<Array<any>> = (props) => {
	return (
		<TObjectLike
			entries={props.value.entries()}
			brackets="[]"
			preview={5}
			themeColor="oklch(0.702 0.183 293.541)"
			previewColor="oklch(0.381 0.176 304.987)"
			isCollection
		></TObjectLike>
	);
};
