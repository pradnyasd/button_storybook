import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../../src/feature/common/Button";

storiesOf("Button", module).add("with text", () => (
	  <Button label={`Continue`} myclass="primary" />
));

storiesOf("Button", module).add("with message", () => (
	<Button label={`Hello from Storybook`} myclass="secondary" />
));


