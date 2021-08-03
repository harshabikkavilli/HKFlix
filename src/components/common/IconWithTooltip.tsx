import React from 'react';
import {Placement} from 'react-bootstrap/esm/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import styled from 'styled-components';

type IconProps = {
	id: string;
	tooltipText: string;
	placement?: Placement;
	children: JSX.Element;
};
export default function IconWithTooltip(props: IconProps) {
	const {id, tooltipText, placement = 'bottom', children} = props;
	return (
		<IconWrapper>
			<OverlayTrigger
				placement={placement}
				overlay={<Tooltip id={id}>{tooltipText}</Tooltip>}>
				{children}
			</OverlayTrigger>
		</IconWrapper>
	);
}

export const IconWrapper = styled.div`
	height: 100%;
`;
