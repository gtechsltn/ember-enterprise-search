# Ember Enterprise Search
* Name: ember-enterprise-search

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

```
ember g template posts/loading
ember g template post-modal/loading
ember g template posts/error
ember g template post-modal/error
ember g template posts/empty
```

```
ember build
ember build --environment=production
```

```
git tag -a v1.0.0 -m "Phiên bản ổn định đầu tiên"
git push origin v1.0.0
```

* [Google Docs](https://docs.google.com/document/d/16F1DzVt5dCBziDD9_GiIVCn4oAlS6kOhm-VmCMFDqlw)
* [Google Gemini](https://gemini.google.com/app/8d75e18866b076e0)
* [ChatGPT](https://chatgpt.com/c/6906eafc-8ff0-8324-bf54-4b54c166c3ae)
* [ChatGPT](https://chatgpt.com/c/6906d5ae-52cc-8321-97fa-df289130396a)
* [ChatGPT](https://chatgpt.com/c/69074cd5-99dc-8321-919e-c1267e78a7a6)
* [Ember Octane Glimmer Components](https://mainmatter.com/blog/2020/10/05/simpler-and-more-powerful-components-in-ember-octane-with-glimmer-components/)
* [Upgrade Ember Octane](https://discuss.emberjs.com/t/ember-octane-upgrade-both-classic-vs-glimmer-component-support/18362)
* [Upgrade Ember Classic to Ember Octane](https://dev.to/lighthouse-intelligence/the-road-from-ember-classic-to-glimmer-components-4hlc)

# Initializer -> Application -> Service -> Router.js -> Route -> Controller -> Template -> Component
```
ember-enterprise-search/app/app.js
ember-enterprise-search/app/components/debug-console.js
ember-enterprise-search/app/components/modal-dialog.js
ember-enterprise-search/app/controllers/post-modal.js
ember-enterprise-search/app/initializers/session-config.js
ember-enterprise-search/app/router.js
ember-enterprise-search/app/routes/application.js
ember-enterprise-search/app/routes/post-modal.js
ember-enterprise-search/app/routes/posts.js
ember-enterprise-search/app/styles/app.scss
ember-enterprise-search/app/templates/application.hbs
ember-enterprise-search/app/templates/components/debug-console.hbs
ember-enterprise-search/app/templates/components/modal-dialog.hbs
ember-enterprise-search/app/templates/error.hbs
ember-enterprise-search/app/templates/index.hbs
ember-enterprise-search/app/templates/loading.hbs
ember-enterprise-search/app/templates/post-modal.hbs
ember-enterprise-search/app/templates/post-modal/error.hbs
ember-enterprise-search/app/templates/post-modal/loading.hbs
ember-enterprise-search/app/templates/posts.hbs
ember-enterprise-search/app/templates/posts/empty.hbs
ember-enterprise-search/config/environment.js
ember-enterprise-search/package.json
ember-enterprise-search/package-lock.json
ember-enterprise-search/public/mock/posts.json
ember-enterprise-search/public/web.config
ember-enterprise-search/tests/integration/components/debug-console-test.js
ember-enterprise-search/tests/integration/components/modal-dialog-test.js
ember-enterprise-search/tests/unit/routes/post-modal-test.js
ember-enterprise-search/tests/unit/routes/posts-test.js
```

# Generate ChatGPT Prompt
```
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8; // Hỗ trợ Unicode
            Console.InputEncoding = Encoding.UTF8;

            //Console.Write("Nhập đường dẫn đến tệp danh sách (ví dụ: list.txt): ");
            //string listFile = Console.ReadLine()?.Trim();

            //if (string.IsNullOrEmpty(listFile) || !File.Exists(listFile))
            //{
            //    Console.WriteLine("❌ Không tìm thấy tệp danh sách!");
            //    return;
            //}

            //string[] filePaths = File.ReadAllLines(listFile);
            string[] list = new[] {
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\app.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\router.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\routes\\application.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\routes\\posts.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\routes\\post-modal.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\application.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\posts.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\post-modal.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\loading.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\error.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\posts\\loading.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\posts\\error.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\posts\\empty.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\post-modal\\error.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\post-modal\\loading.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\initializers\\session-config.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\components\\modal-dialog.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\components\\modal-dialog.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\public\\mock\\posts.json",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\router.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\routes\\application.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\application.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\config\\environment.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\components\\debug-console.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\components\\modal-dialog.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\controllers\\post-modal.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\routes\\post-modal.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\routes\\posts.js",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\components\\debug-console.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\components\\modal-dialog.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\error.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\index.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\loading.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\post-modal.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\app\\templates\\posts.hbs",
                "D:\\gtechsltn\\ember-enterprise-search\\ember-enterprise-search\\public\\mock\\posts.json",
            };

            // Tạo HashSet từ List
            HashSet<string> filePaths = new HashSet<string>(list);
            foreach (var item in filePaths)
            {
                Console.WriteLine(item);
            }

            string outputFile = "output.txt";

            File.WriteAllText(outputFile, "", Encoding.UTF8);

            using (StreamWriter writer = new StreamWriter(outputFile, false, Encoding.UTF8))
            {
                foreach (string filePath in filePaths)
                {
                    string trimmedPath = filePath.Trim();
                    if (string.IsNullOrEmpty(trimmedPath)) continue;

                    writer.WriteLine($"{Path.GetFileName(trimmedPath)}:");

                    try
                    {
                        string content = File.ReadAllText(trimmedPath, Encoding.UTF8);
                        writer.WriteLine(content);
                    }
                    catch (Exception ex)
                    {
                        writer.WriteLine($"[Lỗi khi đọc tệp: {ex.Message}]");
                    }

                    writer.WriteLine();
                }
            }

            Console.WriteLine($"✅ Đã ghi toàn bộ kết quả ra tệp: {Path.GetFullPath("output.txt")}");

            Console.Write($"{Environment.NewLine}✅ Đã đọc xong tất cả các tệp. Press any key to exit...");
            Console.ReadKey();
        }
    }
}
```