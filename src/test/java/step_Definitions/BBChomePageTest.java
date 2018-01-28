package step_Definitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.BBCRegisterPage;
import pages.BBChomePage;
import pages.BBCregistrationPage;
import pages.BBCsigninPage;

public class BBChomePageTest {
  
  WebDriver driver; 
  	
  
  @Given("^I am on the BBC Homepage$")
  public void i_am_on_the_BBC_Homepage() throws Throwable {
      System.setProperty("webdriver.chrome.driver","C:\\Users\\Bamisho\\Desktop\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.navigate().to("http://www.bbc.co.uk/");

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  @Given("^I click Signin$")
  public void i_click_Signin() throws Throwable {
	  BBChomePage homepage = PageFactory.initElements(driver, BBChomePage.class);
		
      homepage.mysign_in();
  }

  @Given("^I click register now$")
  public void i_click_register_now() throws Throwable {
	  BBCsigninPage signinpage = PageFactory.initElements(driver, BBCsigninPage.class);
		
	  signinpage.click_register();
  }

	@And("^I type day \"([^\"]*)\" in the day field$")
	public void i_type_day_in_the_day_field(String day) throws Throwable {
	   
		BBCRegisterPage registerpage = PageFactory.initElements(driver, BBCRegisterPage.class);
		registerpage.type_day(day);
	}

	@And("^I type month \"([^\"]*)\" in the month field$")
	public void i_type_month_in_the_month_field(String month) throws Throwable {
		BBCRegisterPage registerpage = PageFactory.initElements(driver, BBCRegisterPage.class);
		registerpage.type_month(month);
	}

	@And("^I typr year \"([^\"]*)\" in the year field$")
	public void i_typr_year_in_the_year_field(String year) throws Throwable {
		BBCRegisterPage registerpage = PageFactory.initElements(driver, BBCRegisterPage.class);
		registerpage.type_year(year);
	}

	@Given("^I click Next$")
	public void i_click_Next() throws Throwable {
		BBCRegisterPage registerpage = PageFactory.initElements(driver, BBCRegisterPage.class);
		registerpage.Next_button();
	}

	@Given("^I type email \"([^\"]*)\" address in the email field$")
	public void i_type_email_address_in_the_email_field(String Email) throws Throwable {
		BBCregistrationPage registrationpage = PageFactory.initElements(driver, BBCregistrationPage.class);
		registrationpage.type_username(Email);
	}

	@Given("^I type password \"([^\"]*)\" in the password field$")
	public void i_type_password_in_the_password_field(String Password) throws Throwable {
		BBCregistrationPage registrationpage = PageFactory.initElements(driver, BBCregistrationPage.class);
		registrationpage.type_password(Password);
	}
	@And("^I type Hometown\"([^\"]*)\" in the hometown field$")
	public void i_type_Hometown_in_the_hometown_field(String Hometown) throws Throwable {
		BBCregistrationPage registrationpage = PageFactory.initElements(driver, BBCregistrationPage.class);
		registrationpage.type_home(Hometown);
	}

	@Given("^I click the NO button, I dont want email updates$")
	public void i_click_the_NO_button_I_dont_want_email_updates() throws Throwable {
	    BBCregistrationPage registrationpage = PageFactory.initElements(driver, BBCregistrationPage.class);
		registrationpage.click_No();
	}

	@Given("^I click Register button$")
	public void i_click_Register_button() throws Throwable {
		BBCregistrationPage registrationpage = PageFactory.initElements(driver, BBCregistrationPage.class);
		registrationpage.click();
	}

	
}	
