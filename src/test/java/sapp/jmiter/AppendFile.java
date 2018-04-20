package sapp.jmiter;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import com.alibaba.fastjson.JSONObject;

@SuppressWarnings("unused")
public class AppendFile {
    public static void main(String[] args) {
        AppendFile a = new AppendFile();
        /*        a.appendFile("E:\\dd.txt", "222222222222222");
        a.appendFile(""E:\\jmeter\\sameText.txt"", "333333333");*/
    /*   a.appendFile("E:\\jmeter\\sameText.txt", "234");
    Object allSendCode =     a.read("E:\\jmeter\\sameText.txt");*/
    System.out.println(a.getSetCookie("Set-Cookie: stoken=2f1b3610edc504428f6f66c8e98ebcf4", "stoken"));
//    System.out.println(allSendCode);
    
   
    	

    }

    public   void appendFile(String fileName, String content) {
    	File file = new File(fileName);
    	
    	if(!file.getParentFile().isDirectory())
    		file.getParentFile().mkdirs();
    	
    	if(!file.exists())
			try {
				file.createNewFile();
			} catch (IOException e) {
				throw new RuntimeException(e);
			}
    	
    	
        try {
            // 打开一个随机访问文件流，按读写方式
            RandomAccessFile randomFile = new RandomAccessFile(fileName, "rw");
            // 文件长度，字节数
            long fileLength = randomFile.length();
            // 将写文件指针移到文件尾。
            randomFile.seek(fileLength);
            randomFile.writeBytes(content + "\r\n");
            randomFile.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    /**
     * 读取文件，并判断文件中是否有重复内容，如果有重复内容，把重复内容保存到另外一个文件
     * @param filePath
     * @return
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public List<String> read(String filePath) {
    	List<String> list = new ArrayList<>();
        BufferedReader br = null;
        String line = null;
        StringBuffer buf = new StringBuffer();    
        Set set = new HashSet();
        
        try {
            br = new BufferedReader(new FileReader(filePath));
            int lineCount = 0;
            
            while ((line = br.readLine()) != null) {
                buf.append(line + "\r\n");
                lineCount = lineCount + 1;
                if(!set.add(line)){
                    AppendFile a = new AppendFile();
                    
                    
                }
               list.add(line);

            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {

            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    br = null;
                }
            }
        }

        return list;
    }
    
    
    
    public String getSetCookie(String str,String name) {
		//Set-Cookie: stoken=2f1b3610edc504428f6f66c8e98ebcf4
    	
    	if(str.trim().indexOf("Set-Cookie:")!=0)
    		throw new RuntimeException("不正确的格式");
    	str = str.trim().substring(11, str.length());
    	String[] cookies = str.split(";");
    	for (int i = 0; i < cookies.length; i++) {
    		String ex = cookies[i];
    		String tname = ex.substring(0,ex.indexOf("="));
    		if(name.equals(tname.trim()))
    			return ex.substring(ex.indexOf("=")+1,ex.length());
			
		}
    	return null;

	}
    
    
    

}
