import { render, screen } from "@testing-library/react";

import Image from "./index";

describe("Image component", () => {
  test("renders NextImage when priority is true", () => {
    render(
      <Image
        alt="test image"
        height={200}
        priority={true}
        src="https://picsum.photos/200"
        width={200}
      />,
    );
    const image = screen.getByAltText("test image");

    expect(image).toBeInTheDocument();
  });

  test("renders NextUIImage when priority is false", () => {
    render(
      <Image
        alt="test image"
        height={200}
        priority={false}
        src="https://picsum.photos/200"
        width={200}
      />,
    );
    const image = screen.getByAltText("test image");

    expect(image).toBeInTheDocument();
  });
});
