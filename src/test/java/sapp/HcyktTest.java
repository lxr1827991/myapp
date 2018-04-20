package sapp;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class HcyktTest {
	
	public static void main(String[] args) {
		
		
		ExecutorService fixedThreadPool = Executors.newFixedThreadPool(3);
		for (int i = 0; i < 100; i++) {
		final int index = i;
		fixedThreadPool.execute(new Runnable() {
		 
		@Override
		public void run() {
		try {
		System.out.println(index);
		Thread.sleep(2000);
		} catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		}
		}
		});
		}		  System.out.println("end");
		
	}
	
	
	
	

}
