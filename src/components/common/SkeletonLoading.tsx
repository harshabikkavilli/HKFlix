import styled, {css} from 'styled-components';

const SkeletonPulse = styled.div<{translucent: boolean; height?: string}>`
	display: inline-block;
	height: 100%;
	width: 100%;
	${(props) =>
		props.height &&
		css`
			height: ${props.height};
		`}
	background: ${(props) =>
		props.translucent
			? css`linear-gradient(-90deg, #6b6b6b 0%, #a0a0a0 50%, #6b6b6b 100%)`
			: css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
	background-size: 400% 400%;
	animation: pulse 1.2s ease-in-out infinite;
	@keyframes pulse {
		0% {
			background-position: 0% 0%;
		}
		100% {
			background-position: -135% 0%;
		}
	}
`;

const StyledSkeletonLine = styled(SkeletonPulse)`
	width: 100%;
	height: 100%;
	border-radius: 5px;

	&::before {
		content: '\00a0';
	}
`;

export const SkeletonLine = ({
	translucent,
	height
}: {
	translucent: boolean;
	height?: string;
}) => <StyledSkeletonLine translucent={translucent} height={height} />;
