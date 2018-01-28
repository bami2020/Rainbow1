package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BBCRegisterPage {

	WebDriver driver; 
	
	@FindBy(how=How.CSS, using="#day-input")
	public static WebElement Day_field; 
	
	@FindBy(how=How.CSS, using="#month-input")
	public static WebElement Month_field;
	
	@FindBy(how=How.CSS, using="#year-input")
	public static WebElement year_field;
	
	@FindBy(how=How.CSS, using="#submit-button")
	public static WebElement click_Next;
	
	public void type_day(String day){
		Day_field.sendKeys(day);
	}
	
	public void type_month(String month){
		Month_field.sendKeys(month);
	}
	
	public void type_year(String year){
		year_field.sendKeys(year);
	}
	
	public void Next_button(){
		click_Next.click();
	}
}
