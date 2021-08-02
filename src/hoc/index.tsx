import React from 'react';

export const withProviders = (providers: React.FC[]) => (
	WrappedComponent: React.FC
) => (props: any) =>
	providers.reduceRight((accum: any, Provider: React.FC) => {
		return <Provider>{accum}</Provider>;
	}, <WrappedComponent {...props} />);
