package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BBCregistrationPage {

	WebDriver driver;
	
	@FindBy(how=How.ID, using="user-identifier-input")
	public static WebElement username; 
	
	@FindBy(how=How.ID, using="password-input")
	public static WebElement password; 
	
	@FindBy(how=How.ID, using="hometown-input")
	public static WebElement hometown;
	
	@FindBy(how=How.XPATH, using="//*[@id='marketingOptIn']/div[1]/div[2]/label/div/div/span")
	public static WebElement email_update;
	
	@FindBy(how=How.ID, using="submit-button") 
		public static WebElement submit;
	
	public void type_username(String Email){
		username.sendKeys(Email);
	}
	
	public void type_password(String Password){
		password.sendKeys(Password);
	}
	
	public void type_home(String Hometown){
		hometown.sendKeys(Hometown);
	}
	
	public void click_No(){
		email_update.click();
	}
	
	public void click(){
		submit.click();
	}
}
