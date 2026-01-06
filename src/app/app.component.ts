import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  ngOnInit(): void {
    // Additional initialization logic can be added here
  }

  /**
   * Initialize the application
   * Handle platform-specific setup and native functionality
   */
  private async initializeApp(): Promise<void> {
    try {
      await this.platform.ready();

      // Configure status bar
      await this.setupStatusBar();

      // Hide splash screen
      await this.hideSplashScreen();
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  }

  /**
   * Setup status bar styling based on platform
   */
  private async setupStatusBar(): Promise<void> {
    try {
      await StatusBar.setStyle({ style: 'LIGHT' });
      await StatusBar.setBackgroundColor({ color: '#FFFFFF' });
    } catch (error) {
      console.warn('Status bar setup not available on this platform:', error);
    }
  }

  /**
   * Hide the splash screen after app initialization
   */
  private async hideSplashScreen(): Promise<void> {
    try {
      await SplashScreen.hide();
    } catch (error) {
      console.warn('Splash screen not available on this platform:', error);
    }
  }
}
