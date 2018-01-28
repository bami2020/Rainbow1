package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BBChomePage extends BasePage {
    

	public BBChomePage(WebDriver driver) {
		super(driver);
	}

	private By signInElement = By.linkText("Sign in");
	private By usernameElement = By.id("");
	private By passwordElement = By.id(""); 
	
	public BBCAccountPage enterSighnInDetails(String username, String password){ 
		driver.findElement(usernameElement).sendKeys(username);
		driver.findElement(passwordElement).sendKeys(password);
		driver.findElement(signInElement).click();
		
		return new BBCAccountPage(driver);
		
		
	}
	
	/**
	 * you have driver from WebDriver
	 * the driver is pass around your automation framework from class to class
	 * 
	 * as a professional, you instantiate driver once and then pass it along your classes thru inheritance
	 */

}

