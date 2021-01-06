const RegisterForm =() =>{
    return(
        <div>
            <h2>Registration form</h2>
            <div>
                
                <form>
                    <label>Name <input type="text" name="name"/></label> <br></br> <br></br>
                    <label >User email <input type="email" name="name" /> </label> <br></br> <br></br>
                    <label>Password <input type="password" name="password"/><br></br></label> <br></br>
                    <input type="submit" value="Submit" />
                </form>

                <p>Alredy have an account?<a href="Login.html">Login</a></p>
                


            </div>

        </div>
    );
}

export default RegisterForm
