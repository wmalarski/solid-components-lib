import { render } from "@solidjs/testing-library";
import userEvent from "@testing-library/user-event";
import { expect, test, vitest } from "vitest";
import { Button } from "./button";

const user = userEvent.setup();

test("increments value", async () => {
	const onClick = vitest.fn();

	const { getByRole } = render(() => <Button onClick={onClick} />);
	const button = getByRole("button");

	await user.click(button);

	expect(onClick).toHaveBeenCalledTimes(1);
});
