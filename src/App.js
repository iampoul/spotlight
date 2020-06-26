import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Container} from "@material-ui/core";

const Spotlight = () => {
  return (
  	<Container maxWidth="sm">
			<TextField
				placeholder="Placeholder"
				helperText="Start typing..."
				fullWidth
				margin="normal"
				InputLabelProps={{
					shrink: true,
				}}
				id="outlined-secondary"
				label="Spotlight"
				variant="outlined"
				color="secondary"
			/>
	</Container>
	)
};

export default Spotlight
