/**
 * 
 */
package step_Definitions;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * @author Bamisho
 *
 */
public class MortgageCalTest {

	WebDriver driver;
	  
	
	@Before
	public void setUp() throws Exception
	{	
    System.setProperty("webdriver.chrome.driver","C:\\Users\\Bamisho\\Desktop\\chromedriver.exe");
    driver = new ChromeDriver();
    driver.navigate().to("http://www.bbc.co.uk/homes/property/");

	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	@Test
	public void Cal() throws Exception
	{
		driver.findElement(By.linkText("Mortgage calculator")).click();
		driver.findElement(By.xpath("//*[@id='mortcalc']/tbody/tr[1]/td[3]/input")).sendKeys("500000");
		driver.findElement(By.xpath("//*[@id='mortcalc']/tbody/tr[2]/td[3]/input")).sendKeys("25");
		driver.findElement(By.xpath("//*[@id='mortcalc']/tbody/tr[3]/td[3]/input")).sendKeys("13");
		driver.findElement(By.cssSelector("#mortcalc > tbody > tr:nth-child(6) > td:nth-child(3) > input")).click();
		
		Thread.sleep(30000);
	}
	
	@After
	public void TearDown(){
		driver.quit();
		}
	
}
	
	
