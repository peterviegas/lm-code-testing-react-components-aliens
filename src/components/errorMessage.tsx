export interface ErrorMessageProps{
	errorMessage: string;
}

const ErrorMessage : React.FC<ErrorMessageProps> = ( {
	errorMessage}) => {

	return (
		<>
		<p><b>{errorMessage}</b></p>
		</>
	)
}

export default ErrorMessage;