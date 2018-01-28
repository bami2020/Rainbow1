package step_Definitions;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MortgageCalculatorTest {

WebDriver driver;
	  
@Given("^I am on BBC Homes Homepage$")
public void i_am_on_BBC_Homes_Homepage() throws Throwable {
	 System.setProperty("webdriver.chrome.driver","C:\\Users\\Bamisho\\Desktop\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.navigate().to("http://www.bbc.co.uk/homes/");

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
}

@Given("^I click Property$")
public void i_click_Property() throws Throwable {
	driver.findElement(By.linkText("Property")).click();
}
@Given("^I click Mortgage calculator$")
public void i_click_Mortgage_calculator() throws Throwable {
	driver.findElement(By.linkText("Mortgage calculator")).click();
}

@Given("^Mortgage required I type \"([^\"]*)\" into Mortgage required$")
public void mortgage_required_I_type_into_Mortgage_required(String Mortgage_required) throws Throwable {
	driver.findElement(By.xpath("//*[@id='mortcalc']/tbody/tr[1]/td[3]/input")).sendKeys(Mortgage_required);
}

@Given("^Repayment period I type \"([^\"]*)\" into Repayment period$")
public void repayment_period_I_type_into_Repayment_period(String Repayment_period) throws Throwable {
	driver.findElement(By.xpath("//*[@id='mortcalc']/tbody/tr[2]/td[3]/input")).sendKeys(Repayment_period);
}

@Given("^Interest rate I type \"([^\"]*)\" into Interest rate$")
public void interest_rate_I_type_into_Interest_rate(String Interest_rate) throws Throwable {
	driver.findElement(By.xpath("//*[@id='mortcalc']/tbody/tr[3]/td[3]/input")).sendKeys(Interest_rate);
}

@Given("^I click calculate$")
public void i_click_calculate() throws Throwable {
	driver.findElement(By.cssSelector("#mortcalc > tbody > tr:nth-child(6) > td:nth-child(3) > input")).click();
}

@Then("^I see an error alert message$")
public void i_see_an_error_alert_message() throws Throwable {
   Alert alertbox = driver.switchTo().alert();
   System.out.println(alertbox.getText());
   if(alertbox.getText().contains("The Repayment period field is invalid.")){
	   System.out.println("Passed");
   } else {
	   System.out.println("Failed");
   }
}

@Then("^I click OK button to clear the alert$")
public void i_click_OK_button_to_clear_the_alert() throws Throwable {
	Alert alertbox = driver.switchTo().alert();
	alertbox.accept();
}

@Then("^I close the browser$")
public void i_close_the_browser() throws Throwable {
	driver.quit();
}
}
