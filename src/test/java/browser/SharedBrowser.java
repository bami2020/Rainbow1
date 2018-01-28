package browser;

import org.openqa.selenium.WebDriver;

public class SharedBrowser {
	
	private WebDriver driver;

	public void initialiseBrowser(){
		if(driver == null){
			driver = new ChromeDriver();
		}
	}

}
 
