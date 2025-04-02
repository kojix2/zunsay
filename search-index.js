crystal_doc_search_index_callback({"repository_name":"zunsay","body":"# zunsay\n\nVOICEVOX Engine の API を呼び出すための Crystal 製 CLI ツール。\n\n## 必要条件\n\n- [VOICEVOX Engine](https://github.com/VOICEVOX/voicevox_engine) がインストールされ、起動していること\n\n## インストール\n\n### ソースからビルド\n\n```bash\ngit clone https://github.com/kojix2/zunsay.git\ncd zunsay\nshards install\nshards build --release\nbin/zunsay --version\n```\n\nビルドされた実行ファイル `zunsay` をパスの通った場所に配置してください。\n\n## 使い方\n\n### 話者一覧の表示\n\n利用可能な話者（キャラクター）とそのスタイルの一覧を表示します：\n\n```bash\nzunsay speakers\n```\n\n### 音声合成\n\nテキストから音声を合成します：\n\n```bash\nzunsay synthesis -t \"こんにちは、世界\" -s 1 -o output.wav\n```\n\nまたは：\n\n```bash\nzunsay -t \"こんにちは、世界\" -s 1 -o output.wav\n```\n\n### オプション\n\n```\n使用方法: zunsay [オプション] [コマンド]\n\nコマンド:\n  speakers    - 利用可能な話者一覧を表示\n  synthesis   - テキストから音声を合成 (デフォルト)\n\n共通オプション:\n  -h HOST, --host=HOST       VOICEVOX Engine のホスト (デフォルト: 127.0.0.1)\n  -p PORT, --port=PORT       VOICEVOX Engine のポート (デフォルト: 50021)\n\n音声合成オプション:\n  -t TEXT, --text=TEXT       合成するテキスト\n  -s ID, --speaker=ID        話者ID (デフォルト: 1)\n  -o FILE, --output=FILE     出力ファイル名 (デフォルト: output.wav)\n\nその他:\n  --help                     ヘルプを表示\n  --version                  バージョンを表示\n```\n\n## 開発\n\n1. リポジトリをクローンします\n2. 依存関係をインストールします: `shards install`\n3. コードを変更します\n4. テストを実行します: `crystal spec`\n\n## 貢献\n\n1. フォークします (<https://github.com/kojix2/zunsay/fork>)\n2. 機能ブランチを作成します (`git checkout -b my-new-feature`)\n3. 変更をコミットします (`git commit -am 'Add some feature'`)\n4. ブランチにプッシュします (`git push origin my-new-feature`)\n5. プルリクエストを作成します\n\n## ライセンス\n\n[MIT](LICENSE)\n","program":{"html_id":"zunsay/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"zunsay","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"zunsay/Zunsay","path":"Zunsay.html","kind":"module","full_name":"Zunsay","name":"Zunsay","abstract":false,"locations":[{"filename":"src/zunsay/action.cr","line_number":1,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/action.cr#L1"},{"filename":"src/zunsay/cli.cr","line_number":7,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/cli.cr#L7"},{"filename":"src/zunsay/client.cr","line_number":1,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/client.cr#L1"},{"filename":"src/zunsay/config.cr","line_number":1,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/config.cr#L1"},{"filename":"src/zunsay/options.cr","line_number":4,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L4"},{"filename":"src/zunsay/parser.cr","line_number":6,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/parser.cr#L6"},{"filename":"src/zunsay/version.cr","line_number":1,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/version.cr#L1"}],"repository_name":"zunsay","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"DEFAULT_HOST","name":"DEFAULT_HOST","value":"\"127.0.0.1\""},{"id":"DEFAULT_PORT","name":"DEFAULT_PORT","value":"50021"},{"id":"VERSION","name":"VERSION","value":"{{ (`shards version /home/runner/work/zunsay/zunsay/src/zunsay`).chomp.stringify }}"}],"types":[{"html_id":"zunsay/Zunsay/Action","path":"Zunsay/Action.html","kind":"enum","full_name":"Zunsay::Action","name":"Action","abstract":false,"ancestors":[{"html_id":"zunsay/Enum","kind":"struct","full_name":"Enum","name":"Enum"},{"html_id":"zunsay/Comparable","kind":"module","full_name":"Comparable","name":"Comparable"},{"html_id":"zunsay/Value","kind":"struct","full_name":"Value","name":"Value"},{"html_id":"zunsay/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/zunsay/action.cr","line_number":2,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/action.cr#L2"}],"repository_name":"zunsay","program":false,"enum":true,"alias":false,"const":false,"constants":[{"id":"Speakers","name":"Speakers","value":"0"},{"id":"Synthesis","name":"Synthesis","value":"1"},{"id":"Version","name":"Version","value":"2"},{"id":"Help","name":"Help","value":"3"}],"namespace":{"html_id":"zunsay/Zunsay","kind":"module","full_name":"Zunsay","name":"Zunsay"},"instance_methods":[{"html_id":"help?-instance-method","name":"help?","abstract":false,"location":{"filename":"src/zunsay/action.cr","line_number":6,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/action.cr#L6"},"def":{"name":"help?","visibility":"Public","body":"self == Help"}},{"html_id":"speakers?-instance-method","name":"speakers?","abstract":false,"location":{"filename":"src/zunsay/action.cr","line_number":3,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/action.cr#L3"},"def":{"name":"speakers?","visibility":"Public","body":"self == Speakers"}},{"html_id":"synthesis?-instance-method","name":"synthesis?","abstract":false,"location":{"filename":"src/zunsay/action.cr","line_number":4,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/action.cr#L4"},"def":{"name":"synthesis?","visibility":"Public","body":"self == Synthesis"}},{"html_id":"version?-instance-method","name":"version?","abstract":false,"location":{"filename":"src/zunsay/action.cr","line_number":5,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/action.cr#L5"},"def":{"name":"version?","visibility":"Public","body":"self == Version"}}]},{"html_id":"zunsay/Zunsay/CLI","path":"Zunsay/CLI.html","kind":"class","full_name":"Zunsay::CLI","name":"CLI","abstract":false,"superclass":{"html_id":"zunsay/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"zunsay/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"zunsay/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/zunsay/cli.cr","line_number":8,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/cli.cr#L8"}],"repository_name":"zunsay","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"zunsay/Zunsay","kind":"module","full_name":"Zunsay","name":"Zunsay"},"class_methods":[{"html_id":"debug:Bool-class-method","name":"debug","abstract":false,"location":{"filename":"src/zunsay/cli.cr","line_number":9,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/cli.cr#L9"},"def":{"name":"debug","return_type":"Bool","visibility":"Public","body":"@@debug"}},{"html_id":"debug=(debug:Bool)-class-method","name":"debug=","abstract":false,"args":[{"name":"debug","external_name":"debug","restriction":"Bool"}],"args_string":"(debug : Bool)","args_html":"(debug : Bool)","location":{"filename":"src/zunsay/cli.cr","line_number":9,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/cli.cr#L9"},"def":{"name":"debug=","args":[{"name":"debug","external_name":"debug","restriction":"Bool"}],"visibility":"Public","body":"@@debug = debug"}}],"constructors":[{"html_id":"new-class-method","name":"new","abstract":false,"location":{"filename":"src/zunsay/cli.cr","line_number":13,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/cli.cr#L13"},"def":{"name":"new","visibility":"Public","body":"_ = allocate\n_.initialize\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"option:Options-instance-method","name":"option","abstract":false,"location":{"filename":"src/zunsay/cli.cr","line_number":11,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/cli.cr#L11"},"def":{"name":"option","return_type":"Options","visibility":"Public","body":"@option"}},{"html_id":"parser:Parser-instance-method","name":"parser","abstract":false,"location":{"filename":"src/zunsay/cli.cr","line_number":10,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/cli.cr#L10"},"def":{"name":"parser","return_type":"Parser","visibility":"Public","body":"@parser"}},{"html_id":"run-instance-method","name":"run","abstract":false,"location":{"filename":"src/zunsay/cli.cr","line_number":18,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/cli.cr#L18"},"def":{"name":"run","visibility":"Public","body":"begin\n  case option.action\n  when Action::Speakers\n    show_speakers\n  when Action::Synthesis\n    synthesize_voice\n  when Action::Version\n    print_version\n  when Action::Help\n    print_help\n  else\n    raise(ArgumentError.new(\"不明なアクション: #{option.action}\"))\n  end\nrescue ex : Crest::RequestFailed\n  error_message = \"\\n[zunsay] エラー: #{ex.class} #{ex.message}\"\n  error_message = error_message + \"\\nステータスコード: #{ex.http_code}\"\n  if ex.response\n    error_message = error_message + \"\\nレスポンス: #{ex.response.body}\"\n  end\n  if CLI.debug\n    error_message = error_message + \"\\n#{ex.backtrace.join(\"\\n\")}\"\n  end\n  STDERR.puts(error_message)\n  exit(1)\nrescue ex : Crest::RequestTimeout\n  error_message = \"\\n[zunsay] エラー: VOICEVOX Engine に接続できませんでした。\"\n  error_message = error_message + \"\\nホスト #{option.host}:#{option.port} が正しいか、Engine が起動しているか確認してください。\"\n  if CLI.debug\n    error_message = error_message + \"\\n#{ex.backtrace.join(\"\\n\")}\"\n  end\n  STDERR.puts(error_message)\n  exit(1)\nrescue ex\n  error_message = \"\\n[zunsay] エラー: #{ex.message}\"\n  if CLI.debug\n    error_message = error_message + \"\\n#{ex.backtrace.join(\"\\n\")}\"\n  end\n  STDERR.puts(error_message)\n  exit(1)\nend"}}]},{"html_id":"zunsay/Zunsay/Client","path":"Zunsay/Client.html","kind":"class","full_name":"Zunsay::Client","name":"Client","abstract":false,"superclass":{"html_id":"zunsay/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"zunsay/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"zunsay/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/zunsay/client.cr","line_number":3,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/client.cr#L3"}],"repository_name":"zunsay","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"zunsay/Zunsay","kind":"module","full_name":"Zunsay","name":"Zunsay"},"doc":"API クライアントクラス","summary":"<p>API クライアントクラス</p>","constructors":[{"html_id":"new(host:String=DEFAULT_HOST,port:Int32=DEFAULT_PORT)-class-method","name":"new","abstract":false,"args":[{"name":"host","default_value":"DEFAULT_HOST","external_name":"host","restriction":"::String"},{"name":"port","default_value":"DEFAULT_PORT","external_name":"port","restriction":"::Int32"}],"args_string":"(host : String = DEFAULT_HOST, port : Int32 = DEFAULT_PORT)","args_html":"(host : String = <span class=\"t\">DEFAULT_HOST</span>, port : Int32 = <span class=\"t\">DEFAULT_PORT</span>)","location":{"filename":"src/zunsay/client.cr","line_number":7,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/client.cr#L7"},"def":{"name":"new","args":[{"name":"host","default_value":"DEFAULT_HOST","external_name":"host","restriction":"::String"},{"name":"port","default_value":"DEFAULT_PORT","external_name":"port","restriction":"::Int32"}],"visibility":"Public","body":"_ = allocate\n_.initialize(host, port)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"audio_query(text:String,speaker_id:Int32)-instance-method","name":"audio_query","doc":"音声合成用のクエリを作成する","summary":"<p>音声合成用のクエリを作成する</p>","abstract":false,"args":[{"name":"text","external_name":"text","restriction":"String"},{"name":"speaker_id","external_name":"speaker_id","restriction":"Int32"}],"args_string":"(text : String, speaker_id : Int32)","args_html":"(text : String, speaker_id : Int32)","location":{"filename":"src/zunsay/client.cr","line_number":22,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/client.cr#L22"},"def":{"name":"audio_query","args":[{"name":"text","external_name":"text","restriction":"String"},{"name":"speaker_id","external_name":"speaker_id","restriction":"Int32"}],"visibility":"Public","body":"response = Crest.post(\"#{base_url}/audio_query?text=#{URI.encode_www_form(text)}&speaker=#{speaker_id}\")\nJSON.parse(response.body)\n"}},{"html_id":"base_url-instance-method","name":"base_url","doc":"API のベース URL を返す","summary":"<p>API のベース URL を返す</p>","abstract":false,"location":{"filename":"src/zunsay/client.cr","line_number":11,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/client.cr#L11"},"def":{"name":"base_url","visibility":"Public","body":"\"http://#{@host}:#{@port}\""}},{"html_id":"host:String-instance-method","name":"host","abstract":false,"location":{"filename":"src/zunsay/client.cr","line_number":4,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/client.cr#L4"},"def":{"name":"host","return_type":"String","visibility":"Public","body":"@host"}},{"html_id":"port:Int32-instance-method","name":"port","abstract":false,"location":{"filename":"src/zunsay/client.cr","line_number":5,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/client.cr#L5"},"def":{"name":"port","return_type":"Int32","visibility":"Public","body":"@port"}},{"html_id":"speakers-instance-method","name":"speakers","doc":"スピーカー一覧を取得する","summary":"<p>スピーカー一覧を取得する</p>","abstract":false,"location":{"filename":"src/zunsay/client.cr","line_number":16,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/client.cr#L16"},"def":{"name":"speakers","visibility":"Public","body":"response = Crest.get(\"#{base_url}/speakers\")\nJSON.parse(response.body)\n"}},{"html_id":"synthesis(audio_query:JSON::Any,speaker_id:Int32,output_file:String)-instance-method","name":"synthesis","doc":"音声合成を実行する","summary":"<p>音声合成を実行する</p>","abstract":false,"args":[{"name":"audio_query","external_name":"audio_query","restriction":"JSON::Any"},{"name":"speaker_id","external_name":"speaker_id","restriction":"Int32"},{"name":"output_file","external_name":"output_file","restriction":"String"}],"args_string":"(audio_query : JSON::Any, speaker_id : Int32, output_file : String)","args_html":"(audio_query : JSON::Any, speaker_id : Int32, output_file : String)","location":{"filename":"src/zunsay/client.cr","line_number":30,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/client.cr#L30"},"def":{"name":"synthesis","args":[{"name":"audio_query","external_name":"audio_query","restriction":"JSON::Any"},{"name":"speaker_id","external_name":"speaker_id","restriction":"Int32"},{"name":"output_file","external_name":"output_file","restriction":"String"}],"visibility":"Public","body":"resource = Crest::Resource.new(\"#{base_url}\", headers: {\"Content-Type\" => \"application/json\", \"Accept\" => \"audio/wav\"})\nresponse = resource.post(\"/synthesis?speaker=#{speaker_id}\", audio_query.to_json)\nFile.write(output_file, response.body)\nputs(\"音声ファイルを保存しました: #{output_file}\")\n"}}]},{"html_id":"zunsay/Zunsay/Options","path":"Zunsay/Options.html","kind":"class","full_name":"Zunsay::Options","name":"Options","abstract":false,"superclass":{"html_id":"zunsay/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"zunsay/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"zunsay/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/zunsay/options.cr","line_number":5,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L5"}],"repository_name":"zunsay","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"zunsay/Zunsay","kind":"module","full_name":"Zunsay","name":"Zunsay"},"instance_methods":[{"html_id":"action:Action-instance-method","name":"action","abstract":false,"location":{"filename":"src/zunsay/options.cr","line_number":6,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L6"},"def":{"name":"action","return_type":"Action","visibility":"Public","body":"@action"}},{"html_id":"action=(action:Action)-instance-method","name":"action=","abstract":false,"args":[{"name":"action","external_name":"action","restriction":"Action"}],"args_string":"(action : Action)","args_html":"(action : <a href=\"../Zunsay/Action.html\">Action</a>)","location":{"filename":"src/zunsay/options.cr","line_number":6,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L6"},"def":{"name":"action=","args":[{"name":"action","external_name":"action","restriction":"Action"}],"visibility":"Public","body":"@action = action"}},{"html_id":"host:String-instance-method","name":"host","abstract":false,"location":{"filename":"src/zunsay/options.cr","line_number":7,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L7"},"def":{"name":"host","return_type":"String","visibility":"Public","body":"@host"}},{"html_id":"host=(host:String)-instance-method","name":"host=","abstract":false,"args":[{"name":"host","external_name":"host","restriction":"String"}],"args_string":"(host : String)","args_html":"(host : String)","location":{"filename":"src/zunsay/options.cr","line_number":7,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L7"},"def":{"name":"host=","args":[{"name":"host","external_name":"host","restriction":"String"}],"visibility":"Public","body":"@host = host"}},{"html_id":"output_file:String-instance-method","name":"output_file","abstract":false,"location":{"filename":"src/zunsay/options.cr","line_number":11,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L11"},"def":{"name":"output_file","return_type":"String","visibility":"Public","body":"@output_file"}},{"html_id":"output_file=(output_file:String)-instance-method","name":"output_file=","abstract":false,"args":[{"name":"output_file","external_name":"output_file","restriction":"String"}],"args_string":"(output_file : String)","args_html":"(output_file : String)","location":{"filename":"src/zunsay/options.cr","line_number":11,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L11"},"def":{"name":"output_file=","args":[{"name":"output_file","external_name":"output_file","restriction":"String"}],"visibility":"Public","body":"@output_file = output_file"}},{"html_id":"port:Int32-instance-method","name":"port","abstract":false,"location":{"filename":"src/zunsay/options.cr","line_number":8,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L8"},"def":{"name":"port","return_type":"Int32","visibility":"Public","body":"@port"}},{"html_id":"port=(port:Int32)-instance-method","name":"port=","abstract":false,"args":[{"name":"port","external_name":"port","restriction":"Int32"}],"args_string":"(port : Int32)","args_html":"(port : Int32)","location":{"filename":"src/zunsay/options.cr","line_number":8,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L8"},"def":{"name":"port=","args":[{"name":"port","external_name":"port","restriction":"Int32"}],"visibility":"Public","body":"@port = port"}},{"html_id":"speaker_id:Int32-instance-method","name":"speaker_id","abstract":false,"location":{"filename":"src/zunsay/options.cr","line_number":10,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L10"},"def":{"name":"speaker_id","return_type":"Int32","visibility":"Public","body":"@speaker_id"}},{"html_id":"speaker_id=(speaker_id:Int32)-instance-method","name":"speaker_id=","abstract":false,"args":[{"name":"speaker_id","external_name":"speaker_id","restriction":"Int32"}],"args_string":"(speaker_id : Int32)","args_html":"(speaker_id : Int32)","location":{"filename":"src/zunsay/options.cr","line_number":10,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L10"},"def":{"name":"speaker_id=","args":[{"name":"speaker_id","external_name":"speaker_id","restriction":"Int32"}],"visibility":"Public","body":"@speaker_id = speaker_id"}},{"html_id":"text:String-instance-method","name":"text","abstract":false,"location":{"filename":"src/zunsay/options.cr","line_number":9,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L9"},"def":{"name":"text","return_type":"String","visibility":"Public","body":"@text"}},{"html_id":"text=(text:String)-instance-method","name":"text=","abstract":false,"args":[{"name":"text","external_name":"text","restriction":"String"}],"args_string":"(text : String)","args_html":"(text : String)","location":{"filename":"src/zunsay/options.cr","line_number":9,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/options.cr#L9"},"def":{"name":"text=","args":[{"name":"text","external_name":"text","restriction":"String"}],"visibility":"Public","body":"@text = text"}}]},{"html_id":"zunsay/Zunsay/Parser","path":"Zunsay/Parser.html","kind":"class","full_name":"Zunsay::Parser","name":"Parser","abstract":false,"superclass":{"html_id":"zunsay/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"zunsay/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"zunsay/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/zunsay/parser.cr","line_number":7,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/parser.cr#L7"}],"repository_name":"zunsay","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"zunsay/Zunsay","kind":"module","full_name":"Zunsay","name":"Zunsay"},"constructors":[{"html_id":"new-class-method","name":"new","abstract":false,"location":{"filename":"src/zunsay/parser.cr","line_number":11,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/parser.cr#L11"},"def":{"name":"new","visibility":"Public","body":"_ = allocate\n_.initialize\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"help_message:String-instance-method","name":"help_message","abstract":false,"location":{"filename":"src/zunsay/parser.cr","line_number":65,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/parser.cr#L65"},"def":{"name":"help_message","return_type":"String","visibility":"Public","body":"@option_parser.to_s"}},{"html_id":"option_parser:OptionParser-instance-method","name":"option_parser","abstract":false,"location":{"filename":"src/zunsay/parser.cr","line_number":8,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/parser.cr#L8"},"def":{"name":"option_parser","return_type":"OptionParser","visibility":"Public","body":"@option_parser"}},{"html_id":"options:Options-instance-method","name":"options","abstract":false,"location":{"filename":"src/zunsay/parser.cr","line_number":9,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/parser.cr#L9"},"def":{"name":"options","return_type":"Options","visibility":"Public","body":"@options"}},{"html_id":"parse(args:Array(String)):Options-instance-method","name":"parse","abstract":false,"args":[{"name":"args","external_name":"args","restriction":"Array(String)"}],"args_string":"(args : Array(String)) : Options","args_html":"(args : Array(String)) : <a href=\"../Zunsay/Options.html\">Options</a>","location":{"filename":"src/zunsay/parser.cr","line_number":42,"url":"https://github.com/kojix2/zunsay/blob/bad33191e26e72869842cc05d54cddad81d466a2/src/zunsay/parser.cr#L42"},"def":{"name":"parse","args":[{"name":"args","external_name":"args","restriction":"Array(String)"}],"return_type":"Options","visibility":"Public","body":"@options = Options.new\n@option_parser.parse(args)\nif args.size > 0\n  command = args[0]\n  case command\n  when \"speakers\"\n    @options.action = Action::Speakers\n  when \"synthesis\"\n    @options.action = Action::Synthesis\n  else\n    raise(ArgumentError.new(\"不明なコマンド: #{command}\"))\n  end\nend\n@options\n"}}]}]}]}})