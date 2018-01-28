package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BBCsigninPage {

	WebDriver driver; 
	
	@FindBy(how=How.ID, using="user-identifier-input")
	public static WebElement myemail;
	
	@FindBy(how=How.ID, using="password-input")
	public static WebElement mypassword;
	
	@FindBy(how=How.ID, using="submit-button")
	public static WebElement click_button;
	
	@FindBy(how=How.XPATH, using="//*[@id='signin-page']/div[2]/div[2]/div[2]/div[2]/a/span")
	public static WebElement Register_button ;
	
	public void type_password(String Password){
		mypassword.sendKeys(Password);
	}
	public void type_username(String Email){
		myemail.sendKeys(Email);
	}
	
	public void signin_button(){
		click_button.click();;
	}
	
	public void click_register(){
		Register_button.click();;
	}
	
}
