import { SpinnerContainer, SpinnerOverlay } from './WithSpinnerStyles';

const WithSpinner = (WrappedComponent: any) => {
    const Spinner = ({ isLoading, ...otherProps }: any) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
    
    return Spinner;
};

export default WithSpinner;
