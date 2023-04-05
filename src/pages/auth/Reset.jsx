import resetImg from "../../assets/forgot.png";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import {useState } from "react";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";

const Reset = () => {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);


	

	const resetPassword = (e) => {
		e.preventDefault();
		setIsLoading(true);

		sendPasswordResetEmail(auth, email)
			.then(() => {
				setIsLoading(false);
				toast.success("check your email for a reset link");
			})
			.catch((error) => {
				toast.error(error.message);
				setIsLoading(false);
			});
	};








	return (
		<>
			{isLoading && <Loader />}
			<section className={`container ${styles.auth}`}>
				<div className={styles.img}>
					<img src={resetImg} alt="Login" width="400" />
				</div>

				<Card>
					<div className={styles.form}>
						<h2>Reset Password</h2>
						<form onSubmit={resetPassword}>
							<input
								type="text"
								placeholder="Email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<button type="submit" className="--btn --btn-primary --btn-block">
								Reset Password
							</button>
							<div className={styles.links}>
								<p>
									<Link to="/login"> -Login </Link>
								</p>
								<p>
									<Link to="/register"> -Register </Link>
								</p>
							</div>
						</form>
					</div>
				</Card>
			</section>
		</>
	);
};

export default Reset;
