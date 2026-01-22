
export const getImagePath = (
	defaultImage: string,
	image?: string,
	parentFolderPath: string = "components"
): string => {
	return image
		? `/api/public${
				process.env.NEXT_PUBLIC_DYNAMIC_IMAGES_BASE_PATH ?? ""
		  }/${parentFolderPath}/${image?.trim()}`
		: `${process.env.NEXT_PUBLIC_STATIC_IMAGES_BASE_PATH ?? ""}/${defaultImage}`;
};
