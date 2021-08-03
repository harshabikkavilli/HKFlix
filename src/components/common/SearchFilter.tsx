import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

type SearchFilterProps = {
	filter: string;
	children: JSX.Element;
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function SearchFilter(props: SearchFilterProps) {
	const {filter, children, handleSearch} = props;

	return (
		<Form>
			<Form.Group>
				<FormLabel>{children}</FormLabel>
				<StyledControl
					type="componentSearch"
					placeholder="Search..."
					value={filter}
					onChange={handleSearch}
				/>
			</Form.Group>
		</Form>
	);
}

const FormLabel = styled(Form.Label)`
	width: 100%;
`;

const StyledControl = styled(Form.Control)`
	&:focus {
		box-shadow: none;
		border-color: black;
	}
`;
